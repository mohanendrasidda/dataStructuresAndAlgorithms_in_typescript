function recursiveMin(arr:number[]):number|undefined{
if(arr.length==0)return;
if(arr.length==1)return arr[0];

let restArr=recursiveMin(arr.slice(1))
if(arr[0]<restArr!){
    return arr[0];
}
else return restArr;

}

console.log(recursiveMin([5,3,4,2,8,1]))