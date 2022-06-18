const { Model, DataTypes } = require("sequelize")
const sequelize=require('../db')

class Beneficiosempresas extends Model{}
Beneficiosempresas.init({ 
    idbeneficio:{
        type:DataTypes.INTEGER,
        NOTnull: true,
        primaryKey: true,
        references: { // <--- is this redundant to associate
            model: 'beneficio',
            key: 'idbeneficio'
        }
    },
    idempresa:{
        type:DataTypes.INTEGER,
        NOTnull: true,
        references: { // <--- is this redundant to associate
            model: 'empresa',
            key: 'idempresa'
        }
    }
    
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName:"Beneficiosempresas"
}
)
module.exports = Beneficiosempresas