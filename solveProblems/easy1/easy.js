// function moveAllZerosToTheEndOfTheArray(array: number[]) {
//     for (let i = 0; i <array.length; i++) {
//         if(array[i]===0){
//             array.push(array[i])
//             array.splice(i,1)
//         }
//     }
//     console.log("final stage reached",array)
// }
// moveAllZerosToTheEndOfTheArray([3, 0, 0, 2, 0, 6, 0, 4, 0]);
function moveAllZerosToTheEndOfTheArray2(array) {
    var _a;
    var nonzero = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] !== 0) {
            _a = [array[i], array[nonzero]], array[nonzero] = _a[0], array[i] = _a[1];
            nonzero++;
        }
    }
    console.log("final stage reached", array);
}
moveAllZerosToTheEndOfTheArray2([3, 0, 0, 2, 0, 6, 0, 4, 0]);
