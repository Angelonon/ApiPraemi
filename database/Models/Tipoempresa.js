const { Model, DataTypes } = require("sequelize")
const sequelize=require('../db')

class Tipoempresa extends Model{}
Tipoempresa.init({ 
    idTipoEmpresa:{
        type: DataTypes.INTEGER,
        NOTnull: true,
        primaryKey: true
    },
    descTipoEmpresa:{
        type:DataTypes.STRING,

    }
    
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName:"tipoempresa"
}
)
module.exports =  Tipoempresa
