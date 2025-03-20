// type NameType ={
//     fristName:string,
//     lastName:string
// }
function sayDtails(obj) {
    var fristName = obj.fristName, lastName = obj.lastName, age = obj.age;
    return "full name: ".concat(fristName, " ").concat(lastName, ",age: ").concat(age);
}
var instructorDetails = {
    fristName: "sadia afrin Mim",
    lastName: "mimi",
    age: 10
};
console.log(instructorDetails);
