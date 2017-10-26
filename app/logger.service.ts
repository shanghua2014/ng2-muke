import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
    debug(msg:string) {
        console.log('--------------------->')
        console.log(msg)
        console.log('--------------------->')
    }
}