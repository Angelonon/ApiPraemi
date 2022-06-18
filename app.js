const express = require('express')
const app = express()
const sequelize = require('./database/db')
require('./database/asosiaciones')
const middlewares = require('./database/middleware')

// Configuraciones
const port = process.env.PORT ||3000;


//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

// rutas
app.get('/', (req, res) => {
  res.send("hola")
})
app.get('/', (req, res) => {
  res.send("holazxczxc")
})
app.use('/api/usuario',require('./routes/usuario'))

app.use('/api/beneficio',/* middlewares.checkToken, */require('./routes/beneficioxempresas'))
app.use('/api/categoria',require('./routes/Categoria'))
app.use('/api/log',require('./routes/log'))
app.use('/api/transaccion',require('./routes/transaccion'))


// inicio de servidor
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${[port]}`)
    // conoctare a la base de datos
    // force true:DROP TABLES
    sequelize.sync({force:false
  }).then(()=>{
        console.log("conectados a la base de datos")
    }).catch(error=>{
        console.log(error)
    })
  })