export interface IPlayer {
    id?:number;
    first?:string;
    last?:string;
    number:number;
}
export class Player implements IPlayer {
    id?: number;
    first?: string;
    last?: string;
    number: number;
    getName():string{
        if(this.first && this.last)
            return `${this.first[0]}. ${this.last}`;

        if(this.first)
            return this.first; 

        if(this.last)
            return this.last; 

        return `#${this.number}`;
    }
    fullName():string{
        if(this.first && this.last)
            return `${this.first} ${this.last}`;
        return this.getName();

    }
    constructor(number: number, last?:string, first?:string){
        this.number = number;
        this.first = first;
        this.last = last;
    }
}