 
import token from '../class/token'
import {NextFunction, Response} from 'express'

export const verificacionToken = (req:any, res:Response , next:NextFunction)=>{
    const userToken = req.get('x-token') || "";

    token.comprobarToken(userToken)
         .then(decode=>{
             req.body.usuario = decode.usuario
             const tokenrefech = token.getToken({
             _id: decode.id,
             nombre:decode.nombre,
             avatar:decode.avatar
             })
             req.body.tokenrefech = tokenrefech;
             next()
         })
         .catch(error=>{
             res.json({
                 mensaje:"Token Incorrecto"
                 
             })
         })
}