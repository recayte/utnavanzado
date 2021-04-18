import express from 'express';

export default class server{
    public app: express.Application;
    public port: number = 3000;
    public host:string = 'localhost'; 

    constructor(){
        this.app = express();
    }
    
    start(callback:any){
        this.app.listen(this.port, this.host, callback);
    }

}