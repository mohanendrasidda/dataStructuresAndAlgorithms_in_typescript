function insertionSort(array) {
    var _a;
    for (var i = 0; i <= array.length - 1; i++) {
        for (var j = i + 1; j > 0; j--) {
            if (array[j] < array[j - 1]) {
                _a = [array[j], array[j - 1]], array[j - 1] = _a[0], array[j] = _a[1];
            }
        }
    }
    return array;
}
console.log(insertionSort([43, 23, 1, 4, 23, 5]));
