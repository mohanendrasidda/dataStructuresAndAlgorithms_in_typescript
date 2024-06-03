function starPyramid(n) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n - i - 1; j++) {
            process.stdout.write(" ");
        }
        for (var k = n - i; k <= n + i; k++) {
            process.stdout.write("*");
        }
        console.log(" ");
    }
}
starPyramid(5);
