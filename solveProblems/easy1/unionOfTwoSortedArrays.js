var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function unionOfTwoSortedArrays(array1, array2) {
    console.log(new Set(__spreadArray(__spreadArray([], array1, true), array2, true)));
}
unionOfTwoSortedArrays([1, 2, 2, 3, 4, 5, 5, 6], [2, 3, 4, 4, 6, 7, 7]);
