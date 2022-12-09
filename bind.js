// bind an object to a function


let c1={"a":2,"b":4}
let c2={"a":5,"b":1}
function  myname(){
    console.log(this.a+','+this.b)
}
let c1_func=myname.bind(c1)
let c2_func=myname.bind(c2)

c1_func()
c2_func()


// reference to this
// let c1={"a":2,"b":4}
// let c2={"a":5,"b":1}
// function  myname(){
//     console.log(this)
// }
// let c1_func=myname.bind(c1)
// let c2_func=myname.bind(c2)

// c1_func()
// c2_func()


// xfcgvhjnlkm
// let c1={"a":2,"b":4}
// let c2={"a":5,"b":1}
// function  myname(){
//     console.log(this)
// }
// myname()
