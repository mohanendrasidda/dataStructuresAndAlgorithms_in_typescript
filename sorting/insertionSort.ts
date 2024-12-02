function insertionSort(array:number[]):number[]{
    for(let i=0;i<=array.length-1;i++){
        for(let j=i+1;j>0;j--){
            if(array[j]<array[j-1]){
                [array[j-1],array[j]]= [array[j],array[j-1]]
            }
        }
    }
    return array
}

console.log(insertionSort([43,23,1,4,23,5]))