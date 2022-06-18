const express = require('express')
const router= express.Router()
const Beneficio= require('../database/Models/Beneficio')

// to
router.get('/', function(req, res) {
    Beneficio.findAll(
    ).then(beneficio=>{
        res.json(beneficio)
    })
})


// create a new
router.post('/',(req,res) =>{
    Beneficio.create(req.body).then(beneficio=>{
        res.json(beneficio)
    })

    })

// read the
router.get('/:idbeneficio',(req, res)=> {
    Beneficio.findByPk(req.params.idbeneficio).then( beneficio=>{
        res.json(beneficio);
    })
})

//update

//estados

module.exports = router