function myfriend(first,last){
    this.first=first
    this.last=last
}
const greet=function(){
    console.log(`${this.first},${this.last}`)
}
myfriend1=new myfriend("pinki","mandal")
greet()  
greet.call(myfriend1,"hi")  

function emp(first,last){
    this.first=first
    this.last=last
}
const nothing=function(){
    console.log(`${this.first},${this.last}`)
}
emp1=new emp("neha","mandal")
nothing()  
nothing.call(emp1,"how are you")  
