function bubbleSort(array:number[]):number[]{
    for(let i=array.length-1;i>=0;i--){
        for(let j=0;j<=i;j++){
            if(array[j]>array[j+1]){
                [array[j],array[j+1]]= [array[j+1],array[j]]
            }
        }
    }
    return array
}
console.log(bubbleSort([23, 21, 1, 53, 4]))