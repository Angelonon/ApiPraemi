const express = require('express')
const router= express.Router()
const Beneficioxempresas= require('../database/Models/Beneficiosempresas')
const Beneficio = require('../database/Models/Beneficio')
// to
router.get('/', function(req, res) {
    Beneficioxempresas.findAll({
        include:[{
            model:Beneficio,
            as:"beneficio"
        
        }]}
    ).then(beneficio=>{
        res.json(beneficio)
    })
})


// create a new
router.post('/',(req,res) =>{
    Beneficioxempresas.create(req.body).then(beneficio=>{
        res.json(beneficio)
    })

    })

// read the
router.get('/:idbeneficio',(req, res)=> {
    Beneficioxempresas.findByPk(req.params.idbeneficio).then( beneficio=>{
        res.json(beneficio);
    })
})

//update

//estados

module.exports = router