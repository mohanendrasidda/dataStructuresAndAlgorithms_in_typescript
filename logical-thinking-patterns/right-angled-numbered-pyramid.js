function rightAngledNumberedPyramid(n) {
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= i; j++) {
            process.stdout.write(j.toString());
        }
        console.log(" ");
    }
}
rightAngledNumberedPyramid(4);
