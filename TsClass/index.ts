class Computers{
   private _ssd:number
    constructor(public name:string, public ram:number){
        this.name = name;
        this.ram= ram;

        }
    }

    const computer1= new Computers("hp",16)