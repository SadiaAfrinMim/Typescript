function sayDetails(name:string, age:string |number):void{
    let currentAge;
    if(typeof age === "string"){
      currentAge = Number(age) -2 
        
    }
    else{
        currentAge = age -2
    }
    console.log(`y9our name is : ${name}, your age is :${currentAge}`)
}