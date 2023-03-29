var Arithmetic = /** @class */ (function () {
    function Arithmetic(N, M) {
        this.Number1 = N;
        this.Number2 = M;
    }
    Arithmetic.prototype.Addition = function () {
        return this.Number1 + this.Number2;
    };
    Arithmetic.prototype.Subtraction = function () {
        return this.Number1 - this.Number2;
    };
    Arithmetic.prototype.Multiplication = function () {
        return this.Number1 * this.Number2;
    };
    Arithmetic.prototype.Division = function () {
        return this.Number1 / this.Number2;
    };
    return Arithmetic;
}());
var obj1 = new Arithmetic(15, 10);
console.log("Addition is" + obj1.Addition());
console.log("Subtraction is" + obj1.Subtraction());
console.log("Multiplication is" + obj1.Multiplication());
console.log("Division is" + obj1.Division());
var obj2 = new Arithmetic(12, 10);
console.log("Addition is" + obj2.Addition());
console.log("Subtraction is" + obj2.Subtraction());
console.log("Multiplication is" + obj2.Multiplication());
console.log("Division is" + obj2.Division());
