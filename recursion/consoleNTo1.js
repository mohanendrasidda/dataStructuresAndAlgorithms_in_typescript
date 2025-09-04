function consoleNto1(n) {
    if (n < 1) {
        return;
    }
    console.log(n);
    return consoleNto1(n - 1);
}
consoleNto1(5);
