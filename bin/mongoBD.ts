import mongoDB  from 'mongoose'


const MongoConexion = mongoDB.connect('mongodb://localhost:27017/PruebaBD',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
},(error)=>{
    if(error){
        throw error
    }else{
    console.log('Conexion a la base')
    }
})

export default MongoConexion
 