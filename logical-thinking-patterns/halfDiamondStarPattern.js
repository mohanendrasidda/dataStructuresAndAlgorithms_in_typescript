function halfDiamondPattern(n) {
    for (var i = 0; i <= 2 * n - 1; i++) {
        var stars = i;
        if (i > n) {
            stars = 2 * n - i;
        }
        for (var j = 0; j < stars; j++) {
            process.stdout.write("*");
        }
        console.log(" ");
    }
}
halfDiamondPattern(5);
/*function hDiamondPattern(n:number){
    for(let i=0; i<n;i++){
        for(let j=0;j<=i;j++){
            process.stdout.write("*")
        }
        console.log(" ")
    }
}
function invertedHDiamondPattern(n:number){
    for(let i=0; i<n;i++){
        for(let j=0;j<n-i-1;j++){
            process.stdout.write("*")
        }
        console.log(" ")
    }
}
hDiamondPattern(5);
invertedHDiamondPattern(5);*/ 
