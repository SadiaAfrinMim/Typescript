
// ?generic=====akta funtion create korle dynamicly type kora
// function age(something:string):string{
//     return something;
// }

// function age1(something:number):number{
//     return something;
// }
// function age2(something:boolean):boolean{
//     return something;
// }
// age("ten")
// age1(10)
// age2(true)


// generic format 

function age<DynamicType>(something:DynamicType):DynamicType{
    return something
}
age<string>("Ten")
age<number>(10)
age<boolean>(true)