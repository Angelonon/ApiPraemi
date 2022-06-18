const { Model, DataTypes } = require("sequelize")
const sequelize=require('../db')

class NivelEmpleado extends Model{}
NivelEmpleado.init({ 
    idNivel:{
        type: DataTypes.INTEGER,
        NOTnull: true,
        primaryKey: true
    },
    descripcion: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName:"Nivelempleado"
}
)
module.exports =  NivelEmpleado
