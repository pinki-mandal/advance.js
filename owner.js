const  pinki={
    name:"pinki",
    class:5,
    sum:function(){
        var add=2+2;
        console.log("sum of number",add)
        console.log(this.name)
    }
}
pinki.sum() 