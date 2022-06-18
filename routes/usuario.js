const express = require('express')
const router = express.Router()
const Empleado = require('../database/Models/Empleado')
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator')
const moment = require('moment')
const jwt = require('jwt-simple')
const Empleadotipos = require('../database/Models/Empleadotipos')
//Leer todo 
router.get('/:idempleado', (req, res) => {

    Empleado.findAll(
        { 
            where: { idempleado: req.params.idempleado } ,
        }
    ).then( empleado=>{
        res.json(empleado);
    })
   /*  Empleado.findAll().then(empleado => {
        res.json(empleado)
    }) */
})

router.post('/register',
    check('idempleado').not().isEmpty(),
    check('email').isEmail(),
    check('passwd').not().isEmpty()
    , async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json({ errores: errors.array() })
            console.log(errors)
        }
        req.body.passwd = bcrypt.hashSync(req.body.passwd,10)
        const empleado = await Empleado.create(req.body)
        res.json(empleado)

    })
router.post('/login', async (req, res) => {
    const empleado = await Empleado.findOne({
        include:[{
            model:Empleadotipos,
            as:"empleadotipos",
        }],
         where: { email: req.body.email } ,
         
        })
    if (empleado) {
        const iguales = bcrypt.compareSync(req.body.passwd, empleado.passwd)
        if (iguales) {
            res.json([ {success: createToken(empleado),idempleado: empleado.idempleado, estado: empleado.estado, passwd: empleado.passwd, reg: empleado.reg,idempleado:empleado.idempleado,passwd:req.body.passwd,empleadotipos:empleado.empleadotipos}])
        } else {
            res.json([{ error: 'Error en usuario y/o contrasena' }])
        }
    } else {
        res.json([{ error: 'Error en usuario y/o contrasena' }])
    }

})
const createToken = (empleado) => {
    const payload = {
        empleadoID: empleado.empleadoID,
        createdAt: moment().unix(),
        expiredAt: moment().add(5, 'day').unix()
    }
    return jwt.encode(payload, 'frase secreta')
}

router.put('/:idempleado',
check('passwd').not().isEmpty(),
async (req, res) => {
    const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json({ errores: errors.array() })
            console.log(errors)
        }
     Empleado.update(                  
            {
            passwd:bcrypt.hashSync(req.body.passwd,10),
            reg: req.body.reg     
        },
            {
                where: {
                    idempleado: req.params.idempleado
                }
            }
        ).then(res.json({success:'Se ha Actualizado Contraseña/Registro'}))  
    }
)

//Actualizar
router.put('/',(req,res)=>{
    Empleado.update(req.body,{
        where:{
            idempleado:req.body.idempleado
        }
    }).then(res.json({success:'Se ha Modificado'}))
})
/*Leer por PK
router.get('/:id',(req,res)=>{
    Users.findByPk(req.params.id).then(users=>{
        res.json(users)
    })
})

//Actualizar
router.put('/:id',(req,res)=>{
    Users.update(req.body,{
        where:{
            id:req.params.id
        }
    }).then(res.json({success:'Se ha Modificado'}))
})

//Eliminar
router.delete('/:id',(req,res)=>{
    Users.destroy({
        where:{
            id:req.params.id
        }
    }).then(res.json({success:'Se ha Eliminado'}))
})*/
module.exports = router

