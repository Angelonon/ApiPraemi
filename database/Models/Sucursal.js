const { Model, DataTypes } = require("sequelize")
const sequelize=require('../db')

class Sucursal extends Model{}
Sucursal.init({ 
    idsucursal:{
        type: DataTypes.INTEGER,
        NOTnull: true,
        primaryKey: true
    },
    nombre: DataTypes.STRING,
    ubicacion: DataTypes.STRING,
    horario: DataTypes.STRING,
    IdEmpresa:{
        type:DataTypes.INTEGER,
        references: { // <--- is this redundant to associate
            model: 'empresa',
            key: 'idempresa'
        }

    }
    
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName:"sucursal"
}
)
module.exports =  Sucursal
