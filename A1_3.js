function DisplayFactors(a) {
    for (var i = 1; i < a; i++) {
        if (a % i == 0) {
            console.log(i);
        }
    }
}
DisplayFactors(20);
