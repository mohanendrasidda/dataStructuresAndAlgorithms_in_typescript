function unionOfTwoSortedArrays<T>(array1:T[],array2:T[]){
console.log(new Set<T>([...array1, ...array2]))
}

unionOfTwoSortedArrays([1,2,2,3,4,5,5,6],[2,3,4,4,6,7,7])