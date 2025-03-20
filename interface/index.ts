type people1 = {
    fristName:string,
    lastName: string,
    age:number
}
// type people1 ={
//     email: string
// }
// not possible for type diclaration you can use interface

interface people {
    fristName:string,
    lastName: string,
    age:number
}
interface people{
    email: string,
    fullNme():string
}

let sadia:people = {
    fristName:"sadia afrin",
    lastName:" mim",
    age: 88,
    email:"sadiaafrinmim660@gmail.com",
    fullNme: function(){
        return`${this.fristName} ${this.lastName}`
    }
}
console.log(sadia.fullNme())