function appearanceOnce(array) {
    var map = new Map();
    // Count the occurrences of each element
    for (var i = 0; i < array.length; i++) {
        map.set(array[i], (map.get(array[i]) || 0) + 1);
    }
    // Log the keys where the value (frequency) is 1
    for (var _i = 0, map_1 = map; _i < map_1.length; _i++) {
        var _a = map_1[_i], key = _a[0], value = _a[1];
        if (value === 1) {
            console.log("unique key is:", key); // Print only the key where the frequency is 1
        }
    }
}
appearanceOnce([1, 2, 2, 3, 1, 4, 5, 5, 4]);
