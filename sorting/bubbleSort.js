function bubbleSort(array) {
    var _a;
    for (var i = array.length - 1; i >= 0; i--) {
        for (var j = 0; j <= i; j++) {
            if (array[j] > array[j + 1]) {
                _a = [array[j + 1], array[j]], array[j] = _a[0], array[j + 1] = _a[1];
            }
        }
    }
    return array;
}
console.log(bubbleSort([23, 21, 1, 53, 4]));
