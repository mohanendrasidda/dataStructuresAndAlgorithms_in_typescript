function mergeSort(array:number[]):number[]{
    if (array.length<=1){
        return array;
    }
    let mid=Math.floor(array.length/2);
    let left= array.slice(0,mid);
    let right= array.slice(mid);
    const leftSort=mergeSort(left);
    const rightSort=mergeSort(right)

    return merge(leftSort,rightSort)

}

function merge(left:number[],right:number[]){
    let result:number[]=[];
    let i=0;
    let j=0;
    while(i<left.length&&j<right.length){
        if(left[i]<right[j]){
            result.push(left[i])
            i++
        }
        else{
            result.push(right[j])
            j++
        }
    }
    return result.concat(left.slice(i),right.slice(j))
}

console.log(mergeSort([34,1,24,53,1,4,2,3,54,32]))