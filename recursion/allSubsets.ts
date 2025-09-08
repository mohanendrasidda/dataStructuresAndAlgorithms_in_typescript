function allSubsets(array:number[]):number[][]{
    if (array.length===0){
        return array[[]]
    }
    let rest:number[] = array.slice(0)
    return allSubsets(array[0],...rest[])
}

allSubsets([1,2,3])