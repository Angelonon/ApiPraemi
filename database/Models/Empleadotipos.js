const { Model, DataTypes } = require("sequelize")
const sequelize=require('../db')

class Empleadotipos extends Model{}
Empleadotipos.init({ 
    idempleado:{
        type:DataTypes.INTEGER,
        NOTnull: true,
        primaryKey: true,
        references: { // <--- is this redundant to associate
            model: 'empleado',
            key: 'idempleado'
        }
    },
    idtipoempleado:{
        type:DataTypes.INTEGER,
        NOTnull: true,
        references: { // <--- is this redundant to associate
            model: 'tipoempleado',
            key: 'idtipoempleado'
        }
    },
    idempresa:{
        type:DataTypes.INTEGER,
        NOTnull: true,
        references: { // <--- is this redundant to associate
            model: 'empresa',
            key: 'idempresa'
        }
    },
    
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName:"empleadotipos"
}
)
module.exports =  Empleadotipos
