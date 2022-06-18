const { Model, DataTypes } = require("sequelize")
const sequelize=require('../db')

class Beneficiosucursal extends Model{}
Beneficiosucursal.init({ 
    idbeneficio:{
        type:DataTypes.INTEGER,
        NOTnull: true,
        primaryKey: true,
        references: { // <--- is this redundant to associate
            model: 'beneficio',
            key: 'idbeneficio'
        }
    },
    idbeneficio:{
        type:DataTypes.INTEGER,
        NOTnull: true,
        references: { // <--- is this redundant to associate
            model: 'sucursal',
            key: 'idsucursal'
        }
    }
    
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName:"beneficiosucursal"
}
)
module.exports = Beneficiosucursal