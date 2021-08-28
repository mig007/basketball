

export interface IToast {
    title:string;
    messsage:string;
    type:string;
    delay:number;
}
export class Toast implements IToast {
    title: string;   
    messsage: string;
    type: string;
    delay:number = 0;
    constructor(type:string, title:string, message:string, delay?:number){
        this.title = title;
        this.type = type;
        this.messsage = message;
        
        if(delay == undefined)
        {
            
            switch(this.type){
                case "warning":
                    delay = 3000;
                    break;
                case "success":
                    delay = 3000;
                    break;
                default:
                    delay = 0;
                    return;
            }
        }
        this.delay = delay;
        
    }
}
