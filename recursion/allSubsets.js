function allSubsets(array) {
    if (array.length === 1) {
        return array;
    }
    return console.log(allSubsets(array), allSubsets(array.slice(1)));
}
allSubsets([1, 2, 3]);
