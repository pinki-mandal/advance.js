function test(arg1,arg2){
    console.log(this.num,arg1,arg2);
}
test.call({num:100},10,20)


