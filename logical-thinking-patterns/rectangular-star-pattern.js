function rectangular(n) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            process.stdout.write("*");
        }
        console.log();
    }
}
rectangular(4);
