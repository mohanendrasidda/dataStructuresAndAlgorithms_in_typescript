function linearSearch(array, n) {
    for (var i = 0; i < array.length; i++) {
        if (n === array[i]) {
            console.log("".concat(n, "is at index ").concat(i));
        }
    }
}
linearSearch([23, 5, 1, 3, 41, 53], 41);
