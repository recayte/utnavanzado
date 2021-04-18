 
import jtoken from 'jsonwebtoken'


 export default class Token {
    static seed:string = "este-es-el-seed";
    static caducidad:string = "30d";

    constructor(){

    }

    static    getToken(paylod:any):string{
        return  jtoken.sign({
            usuario:paylod
        }, this.seed, {expiresIn: this.caducidad})
    }

  static  comprobarToken(token:string):Promise<any>{
        return new Promise((resolve, reject)=>{
            jtoken.verify(token, this.seed, (error,decode)=>{

                if(error){
                    return reject()
                }else{
                    return resolve(decode)
                }
            })
        })
    }

}
