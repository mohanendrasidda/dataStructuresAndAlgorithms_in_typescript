function linearSearch(array:number[],n:number){
    for(let i=0;i<array.length;i++){
        if(n===array[i]){
            console.log(`${n}is at index ${i}`)
        }
    }
}

linearSearch([23,5,1,3,41,53],41)