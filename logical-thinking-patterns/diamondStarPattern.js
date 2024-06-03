function StarPattern(n) {
    for (var i = 0; i <= n; i++) {
        for (var j = 0; j <= n - i; j++) {
            process.stdout.write(" ");
        }
        for (var k = n - i + 1; k <= n + i + 1; k++) {
            process.stdout.write("*");
        }
        console.log("");
    }
}
function invertedPyramid(n) {
    for (var i = 0; i <= n; i++) {
        for (var j = 0; j <= n - (n - i); j++) {
            process.stdout.write(" ");
        }
        for (var k = n - (n - i) + 1; k <= 2 * n + 1 - i; k++) {
            process.stdout.write("*");
        }
        console.log(" ");
    }
}
StarPattern(5);
invertedPyramid(5);
