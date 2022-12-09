// const  number=[1,-1,2,3,4]
// let sum=0
// for(let n of number){
//     sum+=n
//     console.log(sum)
// }


// const  number=[1,-1,2,3,4]
// let sum=0
// for(let n of number){
//     sum+=n
//     console.log(sum)

// numbers.number((accumators,currentvalue){
//     return accumators+currentvalue
// },0)    
// }



// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);




const array1 = [1, 2, 3, 4];

const intial = 0;
const sum = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  intial
);

console.log(sum);