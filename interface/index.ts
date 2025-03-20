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
    age:number,
    email: string,
    fullNme():string
}
interface Family{
    isWife: boolean,

}
interface Employee extends people,Family{
    designation: String,
    yearOfExperience: number
}

let sadia: Employee = {
    fristName:"sadia afrin",
    lastName:" mim",
    age: 88,
    email:"sadiaafrinmim660@gmail.com",
    fullNme: function(){
        return`${this.fristName} ${this.lastName}`
    },
    designation:"fronend developer",
    yearOfExperience: 10,
    isWife: true,
}
console.log(sadia.fullNme())