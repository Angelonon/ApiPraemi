const { Model, DataTypes } = require("sequelize")
const sequelize=require('../db')

class Tipoempleado extends Model{}
Tipoempleado.init({ 
    idtipoempleado:{
        type: DataTypes.INTEGER,
        NOTnull: true,
        primaryKey: true,
    },
    descTipoEmpleado:{
        type:DataTypes.STRING,

    }
    
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName:"tipoempleado"
}
)
module.exports =  Tipoempleado
