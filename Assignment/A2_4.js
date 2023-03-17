var ChkArmStrong = function (a) {
    var temp = a;
    var sum = 0;
    var digit = 0;
    while (a >= 10) {
        digit = a % 10;
        a = Math.floor(a / 10);
        sum = sum + Math.pow(digit, 3);
        console.log(digit);
    }
    sum = sum + Math.pow(a, 3);
    console.log(sum);
    if (sum === temp) {
        return true;
    }
    return false;
};
console.log(ChkArmStrong(153));
