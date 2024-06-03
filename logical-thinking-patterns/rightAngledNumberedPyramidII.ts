function rightAngledNumberedPyramidII(n:number){
for(let i=1;i<=n;i++){
    for(let j=0;j<=i;j++){
        process.stdout.write(i.toString())
    }
    console.log("")
}
}
rightAngledNumberedPyramidII(4);