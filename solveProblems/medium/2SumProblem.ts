function twoSumProblem(array:number[], target:number){
for(let i=0;i<array.length;i++){
    for(let j=i+1;j<array.length;j++){
        if(target-array[i]==array[j]){
            console.log("yes")
            console.log([i,j]);
        }
        else{
            console.log("No");
            console.log([-1,-1])
            return;
        }
    }
    
}
}

twoSumProblem([2,6,5,8,11],14);