export class Returnresponce{
    constructor(code:number,data:object){
        this.code=code;
        this.data=data
    };
    code!:number;
    data!:object;
}