function findingMissingNumberInArray(array, n) {
    var sum = n * (n + 1) / 2;
    var arraySum = 0;
    for (var i = 0; i < array.length; i++) {
        arraySum = arraySum + array[i];
    }
    console.log("Missing number is".concat(sum - arraySum));
}
findingMissingNumberInArray([1, 2, 3, 4, 5], 6);
