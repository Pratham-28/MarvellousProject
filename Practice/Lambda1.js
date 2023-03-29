// named function
function add(a, b) {
    console.log("sum is" + (a + b));
}
add(10, 20);
//  Anonymous Function
var Ret = function (A, B) {
    return A + B;
};
console.log(Ret);
// Lambda Statement
// Fat Arrow :   => : writee lambda function
var Ret = function (A, B) {
    console.log("Inside Lambda");
    return A + B;
};
console.log(Ret(10, 11));
// Lambda  Expreession
var Ret = function (A, B) { return A + B; };
console.log("ans is " + Ret(15, 15));
