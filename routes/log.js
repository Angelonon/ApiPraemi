const express = require('express')
const router= express.Router()
const Log= require('../database/Models/Log')

// to
router.get('/', function(req, res) {
    Log.findAll().then(log=>{
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
router.get('/:coalfanumerico',(req, res)=> {
    Log.findAll({
        where: {coalfanumerico:req.params.coalfanumerico}
    }).then( log=>{
        res.json(log);
    })
})

//update

//estados

module.exports = router