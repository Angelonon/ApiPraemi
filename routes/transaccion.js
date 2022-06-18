const express = require('express')
const Beneficio = require('../database/Models/Beneficio')
const Empleado = require('../database/Models/Empleado')
const router= express.Router()
const Log= require('../database/Models/Transaccion')

// to
router.post('/:idtransaccion', function(req, res) {

    Log.findAll({
        include:[{
            model:Beneficio,
            as:"beneficio"
        
        },{
            model:Empleado,
            as:"empleado"
        }
        ],
        where: { idcomercio: req.params.idtransaccion } ,
        
    
    }).then(log=>{
        res.json(log)
    })
})


// create a new
router.post('/',(req,res) =>{
    Log.create(req.body).then(log=>{
        res.json(log)
    })
})

// read the
router.get('/:idtransaccion',(req, res)=> {
    Log.findAll({
        include:[{
            model:Beneficio,
            as:"beneficio"
        
        },{
            model:Empleado,
            as:"empleado"
        }
        ],
        where:{
            idtransaccion:req.params.idtransaccion
        }
        
    
    }).then(log=>{
        res.json(log)
    })
})

//update

//estados

module.exports = router