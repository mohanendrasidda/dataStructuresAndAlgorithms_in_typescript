function selectionSort(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            var swap = array[i];
            if (array[j] < swap) {
                swap = array[i];
                array[i] = array[j];
                array[j] = swap;
            }
        }
    }
    return array;
}
console.log(selectionSort([1, 3, 51, 24, 3, 1]));
