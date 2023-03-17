function ChkPrime(a) {
    var count = 0;
    for (var i = 0; i <= a; i++) {
        if (a % i == 0) {
            count++;
        }
    }
    if (count == 2) {
        return true;
    }
    return false;
}
console.log(ChkPrime(12));
