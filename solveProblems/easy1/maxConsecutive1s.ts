function maxConsecutive1s(array:number[]){
let counter:number=0;
let max:number=0;
for(let i=0;i<array.length;i++){
    if(array[i]===1){
        counter++
    }
    else{
        if(max<counter){
            max=counter;
            counter=array[i]
        }
    }
}        
     max<counter?console.log(max=counter):console.log(max)
}
maxConsecutive1s([1,0,1,1,1,1,1,0,0,1,1,1,1])