function selectionSort(array:number[]):number[]{
    for(let i=0;i<array.length;i++){
        for(let j=i+1;j<array.length;j++){
            let swap=array[i];
            if(array[j]<swap){
                swap=array[i]
                array[i]=array[j]
                array[j]=swap;
            }

        }
        
    }
    return array
}

console.log(selectionSort([1,3,51,24,3,1]))