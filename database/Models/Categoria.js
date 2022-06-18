const { Model, DataTypes } = require("sequelize")
const sequelize=require('../db')

class Categoria extends Model{}
Categoria.init({ 
    idcategoria:{
        type: DataTypes.INTEGER,
        NOTnull: true,
        primaryKey: true
    },
    descripcion: DataTypes.STRING,
    imagen:DataTypes.STRING
    
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName:"categoria"
}
)
module.exports =  Categoria
