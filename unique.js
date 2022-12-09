const ages = [26, 27, 26, 26, 28, 28,30]
let b=[]
for(let i=0; i<ages.length;i++){
    let count=1
    for(let j=0; j<ages.length; j++){
        if(ages[i]==ages[j] && i!=j){
            count+=1
        }
    }
    if(count<2){
        if(!b.includes(ages[i])){
            b.push(ages[i])
        }
    }
}
console.log(b)