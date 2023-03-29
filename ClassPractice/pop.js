function Addition(No1, No2) {
    var Ans = 0;
    Ans = No1 + No2;
    return Ans;
}
function Subtraction(No1, No2) {
    var Ans = 0;
    Ans = No1 - No2;
    return Ans;
}
var A = 11;
var B = 10;
var ret = 0;
ret = Addition(10, 65);
console.log("Addition is " + ret);
ret = Subtraction(45, 56);
console.log("Subtraction is " + ret);
