function Maximum(a) {
    var max = a[0];
    for (var i = 0; i < a.length; i++) {
        if (a[i] > max) {
            max = a[i];
        }
    }
    console.log(max);
    return max;
}
var a = [23, 89, 6, 29, 56, 45, , 77, 32];
Maximum(a);
