function rightAngledTrianglePyramid(n) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j <= i; j++) {
            process.stdout.write("*");
        }
        console.log("");
    }
}
rightAngledTrianglePyramid(4);
