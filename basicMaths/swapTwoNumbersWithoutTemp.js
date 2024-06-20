function swapTwoNumbersWithoutTemp(a, b) {
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    console.log(a, b);
}
swapTwoNumbersWithoutTemp(4, 5);
