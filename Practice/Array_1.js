function subArray(a) {
    for (var i = 0; i < a.length - 1; i++) {
        for (var j = i + 1; j < a.length; j++) {
            console.log(a[j]);
        }
    }
}
subArray([1, 2, 3]);
