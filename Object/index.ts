// type NameType ={
//     fristName:string,
//     lastName:string
// }

// let instructorDetails:NameType
//  ={
//     fristName :"sadia afrin mim",
//     lastName : "mimi"

// }

// type channelType={
//     channelName:string,
//     playlist:number,
//     instructorDetails:NameType
// }


// const channelDetails:channelType ={
//     channelName :"sadia mim",
//     playlist: 10,
//     instructorDetails:{
//         fristName:"sadia afrin Mim",
//         lastName:"mimi"
//     }

// }

// const channelDetails2:channelType ={
//     channelName :"sadia mim",
//     playlist: 10,
//     instructorDetails:{
//         fristName:"sadia afrin Mim",
//         lastName:"mimi"
//     }

// }

type DeatailType ={
    fristName:string,
            lastName:string,
            age:number
}


function sayDtails(obj:DeatailType):string{
    let {fristName,lastName,age} = obj
    return `full name: ${fristName} ${lastName},age: ${age}`
}

let instructorDetails:DeatailType ={
            fristName:"sadia afrin Mim",
            lastName:"mimi",
            age: 10
        }

        console.log(instructorDetails)
    