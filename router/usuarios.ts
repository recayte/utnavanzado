import {Router, Request, Response} from 'express';
import { Usuario } from '../models/usuario.model';
import bcryption  from 'bcrypt'
import Token from '../class/token';

const userRouter = Router();

// userRouter.get('/GetUsuario',(req:Request, res: Response)=>{
   
//     Usuario.collection.find.name

// });




userRouter.post('/create', (req:Request, res:Response)=>{

    const user ={
        nombre:req.body.nombre,
        email:req.body.email,
        password:bcryption.hashSync(req.body.password,10),
        
    };

    Usuario.create(user).then(result=>{

        res.json({
            estado: "success",
            mensaje: result

        })
    })
        .catch(error=>{
            res.json({
                estato: "error", 
                mensaje:error
            })
        })
    });


    userRouter.post('/login', (req:Request, res:Response)=>{

        const body = req.body;

        Usuario.findOne({email:body.email},null, null, (error, result)=>{
            if(error){
                throw error
            }
            if(!result){
                res.json({
                    estado:"success",
                    mensaje: "Usuario no existe"
                
                });
            }
            if(result?.CompararPassword(body.password)){

                const userToken = Token.getToken({
                    _id:result.id,
                    nombre:result.nombre,
                    avatar:result.avatar
                });



                res.json({
                    estado:"success",
                    token:userToken,
                    mensaje:"Usuario encontrado",
                    data:result

                })
            }
            
        })

    })
 

export default userRouter;