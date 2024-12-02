function recursiveInsertionSort(array) {
    var _a;
    var i = 0;
    var n = array.length;
    if (i == n) {
        return array;
    }
    else if (array[i + 1] < array[i]) {
        _a = [array[i], array[i + 1]], array[i + 1] = _a[0], array[i] = _a[1];
        recursiveInsertionSort(array);
        i++;
    }
    return array;
}
console.log(recursiveInsertionSort([34, 1, 2, 35, 2, 43, 25, 6]));
