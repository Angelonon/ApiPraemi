const { Model, DataTypes } = require("sequelize")
const sequelize=require('../db')

class Beneficio extends Model{}
Beneficio.init({ 
    idbeneficio:{
        type: DataTypes.INTEGER,
        NOTnull: true,
        primaryKey: true
    },
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,

    vigenciaInicio:DataTypes.DATE,
    vigenciaFin:DataTypes.DATE,
    idProveedor:{
        type:DataTypes.INTEGER,
        references: { // <--- is this redundant to associate
            model: 'empresa',
            key: 'idempresa'
        }
    },
    idcategoria:{
        type:DataTypes.INTEGER,
        references: { // <--- is this redundant to associate
            model: 'categoria',
            key: 'idcategoria'
        }
    },
    imagen:DataTypes.STRING,
    estado: DataTypes.INTEGER,
    codpromocion:DataTypes.STRING,
    descrilarga:DataTypes.STRING,

}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName:"beneficio"
}
)
module.exports =   Beneficio 
