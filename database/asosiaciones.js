const Empresa= require('./Models/Empresa')
const Categoria= require('./Models/Categoria')
const NivelEmpleado= require('./Models/NivelEmpleado')
const Tipoempleado= require('./Models/Tipoempleado')
const Tipoempresa= require('./Models/Tipoempresa')
const Beneficio= require('./Models/Beneficio')
const Sucursal= require('./Models/Sucursal')
const Empleado= require('./Models/Empleado')
const Empresatipos = require('./Models/Empresatipos')
const Empleadotipos= require('./Models/Empleadotipos')
const Empleadoempresas = require('./Models/Empleadoempresas')
const Beneficiosucursal= require('./Models/Beneficiosucursal')
const Beneficiosempresa= require('./Models/Beneficiosempresas')
const Log= require('./Models/Log')
const Transaccion = require('./Models/Transaccion')

//transaccion
Transaccion.belongsTo(Beneficio,{as:"beneficio",foreignKey:"idbeneficio"})
Transaccion.belongsTo(Empleado,{as:"empleado",foreignKey:"idempleado"})

// beneficio x empresas
Beneficiosempresa.belongsTo(Beneficio,{as:"beneficio",foreignKey:"idbeneficio"})

// beneficio x sucursal
Beneficiosucursal.belongsTo(Beneficio,{as:"beneficio",foreignKey:"idbeneficio"})
Beneficiosucursal.belongsTo(Sucursal,{as:"sucursal",foreignKey:"idsucursal"})


//empleado x empresas
Empleado.hasOne(Empleadotipos,{as:"empleadotipos",foreignKey:"idempleado"})
/* Empleadotipos.belongsTo(Empleado,{as:"empleado", foreignKey:"idempleado"}) 
 */

//empleado x empresas
//Transaccion

