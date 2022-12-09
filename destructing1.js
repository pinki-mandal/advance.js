// const biodata={
//     name:"pinki",
//     last:"mandal",
//     age:15
// }
// let {name:myname,last,age} = biodata
// console.log(`my name is ${biodata.name}.my last name  is ${last}.my age is ${age}`)




// nested dictionary
const biodata={
    name:"pinki",
    last:"mandal",
    age:15,
    hobb:{
        first:"playing",
        sec:"youtube"
    }
}
let {name:myname,last,age,hobb} = biodata
console.log(`my name is ${biodata.name}.my last name  is ${last}.my age is ${age}.i love ${hobb.sec}`)