function largestElement(array:number[]):number{
    for(let i=array.length-1;i>=0;i--){
        for(let j=0;j<=i;j++){
            if(array[j]>array[j+1]){
                [array[j],array[j+1]] = [array[j+1],array[j]]
            }
        }

    }

    return array[array.length-1]

}

console.log(largestElement([32,1,2,43,75,2,53,2]))

function recursiveLargestElement(array:number[]):number{
    let max=array[0];
    if(array.length==1){
        return array[0]
    }
     const current=recursiveLargestElement(array.slice(1))
     if(current>max){
        max=current
     }
     return max;
}

console.log(recursiveLargestElement([32,1,2,83,75,2,53,2]))

function secondlargestElement(array:number[]){
    let largest=array[0]
    let smallest=array[0]
    let secondLargest:any
    let secondSmallest:any
    for(let i=0;i<array.length;i++){
        // array[i]<smallest?(secondSmallest=smallest,smallest=array[i]):array[i]>largest?(secondLargest=largest,largest=array[i]):secondSmallest=array[i]
        array[i] < smallest
            ? (secondSmallest = smallest, smallest = array[i])
            : (array[i] > smallest && array[i] < secondSmallest
                ? secondSmallest = array[i]
                : null);

        // Update largest and second largest using ternary operator
        array[i] > largest
            ? (secondLargest = largest, largest = array[i])
            : (array[i] < largest && array[i] > secondLargest
                ? secondLargest = array[i]
                : null);
    }

    console.log("Smallest:", smallest);
    console.log("Largest:", largest);
    console.log("Second Smallest:", secondSmallest);
    console.log("Second Largest:", secondLargest);
    }
    
console.log(secondlargestElement([32,1,3,43,75,2,53,4]))

function checkArraySorted(array:number[]){
    let count=0
for(let i=0;i<array.length-1;i++){
    if(array[i]<array[i+1]){
        count++
    }
        
 }
  if(count==array.length-1){
    console.log(true)
  }
  else console.log(false)
}
checkArraySorted([1,2,3,4,5,6,7,8])