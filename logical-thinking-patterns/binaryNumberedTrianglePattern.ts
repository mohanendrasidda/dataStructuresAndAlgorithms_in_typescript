function binaryNumberedTrianglePattern(n:number){
    for(let i=0; i<n; i++){
            if(i%2==0){
                let j=0;
                while (j<=i){
                    if(j%2==0){
                        process.stdout.write("1")
                    }
                    else{
                        process.stdout.write("0")
                    }
                    j++
                }
                console.log(" ")
            }
            else{
                let j=0;
                while(j<=i){
                    if(j%2==0){
                        process.stdout.write("0")
                    }
                    else{
                        process.stdout.write("1")
                    }
                    j++
                }
                console.log(" ")
                
            }
        }
        console.log();
        
        
           
        
    }
}

binaryNumberedTrianglePattern(5);