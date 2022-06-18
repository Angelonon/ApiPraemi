const { Model, DataTypes } = require("sequelize")
const sequelize=require('../db')

class Empleado extends Model{}
Empleado.init({ 
    idempleado:{
        type: DataTypes.INTEGER,
        NOTnull: true,
        primaryKey: true
    },
    nombre: DataTypes.STRING,
    email:DataTypes.STRING,
    ID: DataTypes.STRING,
    fechaNac:DataTypes.DATE,
    direccion:DataTypes.STRING,
    fechaIni:DataTypes.DATE,
    idNivel:{
        type:DataTypes.INTEGER,
        references: { // <--- is this redundant to associate
            model: 'Nivelempleado',
            key: 'idNivel',
        },
    },
    passwd:DataTypes.STRING,
    estado:DataTypes.TINYINT,
    reg:DataTypes.TINYINT
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName:"empleado"
}
)
module.exports =  Empleado
