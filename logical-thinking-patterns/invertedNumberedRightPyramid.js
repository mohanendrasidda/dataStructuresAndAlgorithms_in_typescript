function invertedNumberedRightPyramid(n) {
    for (var i = 0; i < n; i++) {
        for (var j = 1; j <= n - i; j++) {
            process.stdout.write(j.toString());
        }
        console.log(" ");
    }
}
invertedNumberedRightPyramid(5);
