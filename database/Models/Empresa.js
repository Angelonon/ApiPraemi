const { Model, DataTypes } = require("sequelize")
const sequelize=require('../db')

class Empresa extends Model{}
Empresa.init({ 
    idempresa:{
        type: DataTypes.INTEGER,
        NOTnull: true,
        primaryKey: true
    },
    nombre:{
        type:DataTypes.STRING,
    },
    ruc:{
        type:DataTypes.STRING,
    },
    logo:{
        type:DataTypes.STRING,
    },
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName:"empresa"
}
)
module.exports =  Empresa
