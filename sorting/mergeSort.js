function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    var mid = Math.floor(array.length / 2);
    var left = array.slice(0, mid);
    var right = array.slice(mid);
    var leftSort = mergeSort(left);
    var rightSort = mergeSort(right);
    return merge(leftSort, rightSort);
}
function merge(left, right) {
    var result = [];
    var i = 0;
    var j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        }
        else {
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i), right.slice(j));
}
console.log(mergeSort([34, 1, 24, 53, 1, 4, 2, 3, 54, 32]));
