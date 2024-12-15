function findingMissingNumberInArray(array:number[],n:number){
const sum=n*(n+1)/2;
let arraySum:number=0
for(let i=0;i<array.length;i++){
   arraySum=arraySum+array[i]
}
console.log(`Missing number is: ${sum-arraySum}`)
}
findingMissingNumberInArray([1,2,3,4,5],6)