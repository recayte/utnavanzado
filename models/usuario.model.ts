import { model, Schema, Document } from 'mongoose'
import bscrypt from 'bcrypt'

const usuarioSchema = new Schema<Iusuario>({
    
    nombre:{
        type:String,
        required: [true, 'El nombre es necesario']
    },

    avatar:{
        type: String,
        default: 'av-1.png'
    },
    email:{
       type:String,
       unique:true,
       required: [true, 'El mail es necesario']
    },
    password:{
        type:String,
        required:[true, 'Pass en necesario']
    }
});

usuarioSchema.method('CompararPassword', function(password:string = ""):boolean{
    if(bscrypt.compareSync(password, this.password)){
        return true;
    }
    else{
        return false;
    }
})

interface Iusuario extends Document {
    nombre:string,
    email:string,
    avatar:string, 
    password:string

    CompararPassword(password:string):boolean

};

export const Usuario  = model<Iusuario>('Usuario', usuarioSchema);