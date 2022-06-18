const { Model, DataTypes } = require("sequelize")
const sequelize=require('../db')

class Empresatipos extends Model{}
Empresatipos.init({ 
    idempresa:{
        type: DataTypes.INTEGER,
        NOTnull: true,
        primaryKey: true,
        NOTnull: true,
        primaryKey: true
    },
    idTipoEmpresa:{
        type:DataTypes.INTEGER,
        references: { // <--- is this redundant to associate
            model: 'tipoempresa',
            key: 'idTipoEmpresa'
        }
    },
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName:"empresatipos"
}
)
module.exports =  Empresatipos
