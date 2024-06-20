// function countDigitsInANumber(n:string){
// let count=0;
// for(let i=0; i<n.length;i++){
//     count++;
// }
// console.log(count);
// }
// countDigitsInANumber("329823");
function countDigitsInANumber(n) {
    var count = 0;
    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
    }
    console.log(count);
}
countDigitsInANumber(329823);
