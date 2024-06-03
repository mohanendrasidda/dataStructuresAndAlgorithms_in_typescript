function starPyramid(n:number){
    for(let i=0; i<n; i++){
        for(let j=0; j<n-i-1;j++){
            process.stdout.write(" ");
        }
        for(let k=n-i; k<=n+i; k++){
            process.stdout.write("*")
        }
        console.log(" ")
    }

}
starPyramid(5);