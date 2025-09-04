function sumOfDigits(n: number) {
    if (n === 0) {
        return 0
    }
    let lastDigit: number = n % 10;
   return lastDigit+ sumOfDigits(Math.floor(n / 10))
}

 console.log(sumOfDigits(456));