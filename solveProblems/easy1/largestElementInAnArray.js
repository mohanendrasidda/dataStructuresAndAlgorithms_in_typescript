function largestElement(array) {
    var _a;
    for (var i = array.length - 1; i >= 0; i--) {
        for (var j = 0; j <= i; j++) {
            if (array[j] > array[j + 1]) {
                _a = [array[j + 1], array[j]], array[j] = _a[0], array[j + 1] = _a[1];
            }
        }
    }
    return array[array.length - 1];
}
console.log(largestElement([32, 1, 2, 43, 75, 2, 53, 2]));
function recursiveLargestElement(array) {
    var max = array[0];
    if (array.length == 1) {
        return array[0];
    }
    var current = recursiveLargestElement(array.slice(1));
    if (current > max) {
        max = current;
    }
    return max;
}
console.log(recursiveLargestElement([32, 1, 2, 83, 75, 2, 53, 2]));
function secondlargestElement(array) {
    var largest = array[0];
    var smallest = array[0];
    var secondLargest;
    var secondSmallest;
    for (var i = 0; i < array.length; i++) {
        // array[i]<smallest?(secondSmallest=smallest,smallest=array[i]):array[i]>largest?(secondLargest=largest,largest=array[i]):secondSmallest=array[i]
        array[i] < smallest
            ? (secondSmallest = smallest, smallest = array[i])
            : (array[i] > smallest && array[i] < secondSmallest
                ? secondSmallest = array[i]
                : null);
        // Update largest and second largest using ternary operator
        array[i] > largest
            ? (secondLargest = largest, largest = array[i])
            : (array[i] < largest && array[i] > secondLargest
                ? secondLargest = array[i]
                : null);
    }
    console.log("Smallest:", smallest);
    console.log("Largest:", largest);
    console.log("Second Smallest:", secondSmallest);
    console.log("Second Largest:", secondLargest);
}
console.log(secondlargestElement([32, 1, 3, 43, 75, 2, 53, 4]));
function checkArraySorted(array) {
    var count = 0;
    for (var i = 0; i < array.length - 1; i++) {
        if (array[i] < array[i + 1]) {
            count++;
        }
    }
    if (count == array.length - 1) {
        console.log(true);
    }
    else
        console.log(false);
}
checkArraySorted([1, 2, 3, 4, 5, 6, 7, 8]);
// function removeDuplicates<T>(array:T[]):T[]{
//     let set:Set<T>=new Set<T>(array)
//     console.log(Array.from(set))
// }
// const returned= removeDuplicates([1,2,3,53,53,60,60,86])
function leftRotate(array) {
    var hold = array[0];
    array.splice(0, 1);
    array.push(hold);
    console.log(array);
}
leftRotate([1, 2, 3, 4, 5, 6]);
function leftRotateDPlaces(array, times, direction) {
    var leftHold = array.slice(0, times);
    var rightHold = array.slice(array.length - times, array.length);
    console.log("rightHold", rightHold);
    console.log("leftHold:", leftHold);
    direction == "right" ? rightHold = array.splice(array.length - times, times) : leftHold = array.splice(0, times);
    if (direction == "right") {
        console.log(rightHold.concat(array));
    }
    else
        console.log(array.concat(leftHold));
}
leftRotateDPlaces([1, 2, 3, 4, 5, 6], 2, "left");
