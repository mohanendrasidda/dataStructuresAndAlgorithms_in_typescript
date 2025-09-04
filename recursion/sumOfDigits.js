function sumOfDigits(n) {
    if (n === 0) {
        return 0;
    }
    var lastDigit = n % 10;
    return lastDigit + sumOfDigits(Math.floor(n / 10));
}
console.log(sumOfDigits(456));
