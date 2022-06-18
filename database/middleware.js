const jwt = require('jwt-simple')
const moment = require('moment')
const checkToken =(req,res,next)=>{

    if(!req.headers['user-token']){
        return res.json({error: 'Necesitas incluir el user-token en la cabecera'}
        )
    }
    const userToken = req.headers['user-token']
    let payload={}
    try{
        payload= jwt.decode(userToken,'frase secreta')
    }catch(err){
          return res.json({error: 'El token es incorrecto'})
    }
    if(payload.expiredAt < moment().unix()){
         return res.json({error: 'El token ha expirado'})
    }

    req.empleadoID= payload.empleadoID
    next()
    console.log(userToken)
}
module.exports = {
    checkToken: checkToken
}