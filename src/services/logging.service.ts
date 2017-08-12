import {Injectable} from '@angular/core';

@Injectable()
export class LogginService{
    constructor(){

    }

    logInfo(message:any){
        console.info(message);
    }
    logError(message:any){
        console.error(message);
    }
}