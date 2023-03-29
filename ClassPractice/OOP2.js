// Write application which perform addition & subtraction of 2 numbers
var Arithmetic = /** @class */ (function () {
    function Arithmetic(A, B) {
        this.No1 = A;
        this.No2 = B;
    }
    Arithmetic.prototype.Addition = function () {
        return this.No1 + this.No2;
    };
    Arithmetic.prototype.Subtraction = function () {
        return this.No1 - this.No2;
    };
    return Arithmetic;
}());
var obj1 = new Arithmetic(6, 4);
var obj2 = new Arithmetic(6, 2);
console.log(obj1.Addition(), obj1.Subtraction());
console.log(obj2.Addition(), obj2.Subtraction());
