const { Model, DataTypes } = require("sequelize")
const sequelize=require('../db')

class Empleadoempresas extends Model{}
Empleadoempresas.init({ 
    idempleado:{
        type:DataTypes.INTEGER,
        NOTnull: true,
        primaryKey: true,
        references: { // <--- is this redundant to associate
            model: 'empleado',
            key: 'idempleado'
        }
    },
    idempresa:{
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
    modelName:"empleadoempresas"
}
)
module.exports =  Empleadoempresas
