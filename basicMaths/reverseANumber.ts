// function reverseANumber(n:number){
// let reversedNumber:number;
// while(n>0){
//     let lastDigit:number=Math.floor(n%10);
//     n=Math.floor(n/10);
//     process.stdout.write(lastDigit.toString())

// }
// }
// reverseANumber(534346);

function reverseANumber(n:number){
let reversedNumber=0;
while(n>0){
    reversedNumber=reversedNumber*10+n%10;
    n=Math.floor(n/10);
}
console.log(reversedNumber.toString())
}

reverseANumber(23415345);