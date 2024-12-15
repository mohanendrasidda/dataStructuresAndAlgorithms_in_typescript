function appearanceOnce(array: number[]) {
    const map: Map<number, number> = new Map();
    
    // Count the occurrences of each element
    for (let i = 0; i < array.length; i++) {
        map.set(array[i], (map.get(array[i]) || 0) + 1);
    }

    // Log the keys where the value (frequency) is 1
    for (let [key, value] of map) {
        if (value === 1) {
            console.log("unique key is:", key); // Print only the key where the frequency is 1
        }
    }
}

appearanceOnce([1, 2, 2, 3, 1, 4, 5, 5, 4]);
