// for (i=1;i<=10;i++){
//     c=" "
//     for (j=1;j<=10;j++){
//         c=c+j*i+"\t"
//     }
//     console.log(c)
// }


a=require("readline-sync")
n=a.question("enter the number")
b=a.question("enter the number")
// string=" "
i=1
while (i<=10){   
    j=n
    str=""
    while(j<=b){
        str=str+j*i+"\t"
        j++ 
    }
    i++
    console.log(str)


}
