function checkPalindrome(n:number){
let reversedNumber=0;
let N=n;
while(n>0){
    reversedNumber=reversedNumber*10+n%10;
    n=Math.floor(n/10);
}
console.log(reversedNumber);

    if(reversedNumber==N){
        console.log("Yes number n is a palindrome")
    }
    else{
        console.log("No it's not a palindrome")
    }


}
checkPalindrome(121);