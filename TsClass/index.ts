// class Computers{
//    private _ssd:number
//     constructor(public name:string, public ram:number ){
//         this.name = name;
//         this.ram= ram;

//         }
//         private getDetails():void{
//             console.log(`computer name: ${this.name}`)
//         }
//         get ssdDetails():number{
//             return this._ssd;
//         }
//     }

//     const computer1= new Computers("hp",16)


// interface 

interface ComputerInterface{
    name:string,
    ram: number,
}
interface DetailsInterface{
    aboutComputers():void
}

class Computers implements ComputerInterface,DetailsInterface{
    constructor(public name:string,public ram:number){}
    aboutComputers(): void{
        console.log(`computer name ${this.name} ,and ram:${this.ram}`)
    }
}

let computer = new Computers("hp",18)
