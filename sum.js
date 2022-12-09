const ages = [26, 27, 26, [26, 28, 28], 29, 29,[12,9,34] ,30]
let sum=0
for(let i=0; i<ages.length;i++){
    if(Array.isArray(ages[i])){
        for(let j=0; j<ages[i]; j++){
            sum+=ages[i][j]
        }
    }
    else{
        sum+=ages[i]
    }
}
console.log(sum)


