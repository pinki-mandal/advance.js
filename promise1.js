var count=true;
var sham=new Promise(function(resolve,reject){
    if (count){
        resolve("it is good")
    }
    else{
        reject("it is bad")
    }
})
sham.then(function(value){
    console.log(value)
})
.catch(function(value){
    console.log(value)
})