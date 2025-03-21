function combineObj<T extends object,U extends object>(obj1:T,obj2:U){
    return {...obj1,...obj2}
}
combineObj({name:"mim",age:10},{channel:"sadia afirn mim"})