function rightAngledNumberedPyramidII(n) {
    for (var i = 1; i <= n; i++) {
        for (var j = 0; j <= i; j++) {
            process.stdout.write(i.toString());
        }
        console.log("");
    }
}
rightAngledNumberedPyramidII(4);
