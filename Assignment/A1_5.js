function fibonacci(a) {
    var f0 = 0;
    var f1 = 1;
    console.log("\t" + f0 + "\t" + f1);
    var r = f0 + f1;
    while (r <= a) {
        console.log("\t" + r);
        f0 = f1;
        f1 = r;
        r = f0 + f1;
    }
}
fibonacci(21);
