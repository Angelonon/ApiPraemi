const express = require('express')
const router= express.Router()
const Categoria= require('../database/Models/Categoria')

// todo
router.get('/', function(req, res) {
    Categoria.findAll().then(categoria=>{
        res.json(categoria)
    })
})

module.exports = router