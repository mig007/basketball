import { TOAST_TYPE, ToastType } from './toast-service.service';

export interface IToast {
    title:string;
    messsage:string;
    type:ToastType;
    delay:number;
}
export class Toast implements IToast {
    title: string;   
    messsage: string;
    type: ToastType;
    delay:number = 0;
    constructor(type:ToastType, title:string, message:string, delay?:number){
        this.title = title;
        this.type = type;
        this.messsage = message;
        
        if(delay == undefined)
        {
            
            switch(this.type){
                case TOAST_TYPE.WARNING:
                    delay = 7000;
                    break;
                case TOAST_TYPE.SUCCESS:
                    delay = 5000;
                    break;
                default:
                    delay = 0;
                    return;
            }
        }
        this.delay = delay;
        
    }
}
