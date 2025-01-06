function twoSumProblem(array, target) {
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (target - array[i] == array[j]) {
                console.log("yes");
                console.log([i, j]);
                return;
            }
            else {
                console.log("No");
                console.log([-1, -1]);
                return;
            }
        }
    }
}
twoSumProblem([2, 6, 5, 8, 11], 14);
