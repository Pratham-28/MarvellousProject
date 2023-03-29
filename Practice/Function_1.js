function Percentage(Marks, Outof) {
    if (Marks === void 0) { Marks = 100; }
    if (Outof === void 0) { Outof = 500; }
    var ans = 0;
    ans = (Marks / Outof) * 100;
    return ans;
}
var per = 0;
per = Percentage(220);
console.log("Percetage is " + per);
per = Percentage(220, 300);
console.log("Percetage is " + per);
per = Percentage();
console.log("Percetage is " + per);
//  default parameter should  be at  the end of list
// 
//   optional parameter 
function Area(Rad, PI) {
    var Ans = 0;
    if (PI === undefined) {
        PI = 3.14;
    }
    Ans = PI * Rad * Rad;
    return Ans;
}
console.log("Area is " + Area(20.3, 3.14));
// Rest parameter - variable no of argumentd
function addition() {
    var Arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Arr[_i] = arguments[_i];
    }
    var sum = 0;
    var cnt = 0;
    for (cnt = 0; cnt < Arr.length; cnt++) {
        sum = sum + Arr[cnt];
    }
    return sum;
}
var Ret = 0;
Ret = addition(10, 20);
console.log("Result is " + Ret);
Ret = addition();
console.log("Result is " + Ret);
Ret = addition(10, 20, 30, 40, 400);
console.log("Result is " + Ret);
