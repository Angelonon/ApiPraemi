const { Model, DataTypes } = require("sequelize")
const sequelize=require('../db')

class Transaccion extends Model{}
Transaccion.init({ 
    idtransaccion:{
        type: DataTypes.INTEGER,
        NOTnull: true,
        primaryKey: true,
        autoIncrement: true,
    },
    idbeneficio:{
        type:DataTypes.INTEGER,
        references: { // <--- is this redundant to associate
            model: 'beneficio',
            key: 'idbeneficio'
        }
    },
    idempleado:{
        type:DataTypes.INTEGER,
        references: { // <--- is this redundant to associate
            model: 'empleado',
            key: 'idempleado'
        }
    },
    idcomercio:DataTypes.INTEGER,
    idsucursal:{
        type:DataTypes.INTEGER,
        references: { // <--- is this redundant to associate
            model: 'sucursal',
            key: 'idsucursal'
        }
    },
    fecha:DataTypes.DATE,
    qr:DataTypes.STRING

    
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName:"transaccion"
})
module.exports = Transaccion