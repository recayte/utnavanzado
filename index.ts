import Server from './class/server';
import userRouter from './router/usuarios';
// import {conexionmysql} from './bin/mysql'
import MongoConexion from './bin/mongoBD';
import bodyPaser from 'body-parser';


const server = new Server();

server.start(()=>{
    console.log( `servidor corriendo en : ${server.port} y en host ${server.host}` );
})

// body parse

server.app.use(bodyPaser.urlencoded({extended:true}));
server.app.use(bodyPaser.json());

server.app.use('/users', userRouter);


// conexionmysql.connect((err)=>{
//     if(err){
//         throw err;
//     }else{
//         console.log('base de datos mysql corriendo')
//     }
// });


// conexion de mongo

MongoConexion 


 