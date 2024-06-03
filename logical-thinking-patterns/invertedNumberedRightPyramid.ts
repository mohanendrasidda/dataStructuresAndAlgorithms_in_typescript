function invertedNumberedRightPyramid(n:number){
for(let i=0;i<n;i++){
    for(let j=1; j<=n-i; j++){
        process.stdout.write(j.toString())
    }
    console.log(" ");
}
}

invertedNumberedRightPyramid(5);