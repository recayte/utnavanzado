 
import token from '../class/token'
import {NextFunction, Response} from 'express'

export const verificacionToken = (req:any, res:Response , next:NextFunction)=>{
    const userToken = req.get('x-token') || "";

    token.comprobarToken(userToken)
         .then(decode=>{
             req.usuario = decode.id
             next()
         })
         .catch(error=>{
             res.json({
                 mensaje:"Token Incorrecto"
                 
             })
         })
}