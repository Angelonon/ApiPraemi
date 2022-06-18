const { Model, DataTypes } = require("sequelize")
const sequelize=require('../db')

class Log extends Model{}
Log.init({ 
    idLog:{
        type: DataTypes.INTEGER,
        NOTnull: true,
        primaryKey: true,
        autoIncrement: true,
    },
    coalfanumerico: DataTypes.STRING,
    idempleado:{
        type:DataTypes.INTEGER,
        references: { // <--- is this redundant to associate
            model: 'empleado',
            key: 'idempleado'
        }
    },
    idbeneficio:{
        type:DataTypes.INTEGER,
        references: { // <--- is this redundant to associate
            model: 'beneficio',
            key: 'idbeneficio'
        }
    },
    fecha:DataTypes.DATE,
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
    modelName:"log"
}
)
module.exports =  Log
