function recursiveInsertionSort(array:number[]):number[]{
    let i=0
    const n=array.length
    if(i==n){
        return array
    }
    else if (array[i+1]<array[i]){
        [array[i+1],array[i]]=[array[i],array[i+1]]
        recursiveInsertionSort(array);
        i++
    }
     
     return array;
    
}
console.log(recursiveInsertionSort([34,1,2,35,2,43,25,6]))