"use strict"
function sum(){
    var add=2+2;
    console.log("sum of the number",+add);
    console.log(this)
}
sum()