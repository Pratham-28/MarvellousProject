var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Circle = /** @class */ (function () {
    function Circle(N, M) {
        if (M === void 0) { M = 3.14; }
        this.Radius = N;
        this.PI = M;
    }
    Circle.prototype.Area = function () {
        return this.PI * this.Radius * this.Radius;
    };
    return Circle;
}());
var object1 = new Circle(45);
var object2 = new Circle(45, 3.141);
console.log("Area =" + object1.Area());
console.log("Area =" + object2.Area());
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX(N, M) {
        if (M === void 0) { M = 3.14; }
        var _this = _super.call(this, N, M) || this;
        _this.Radius = N;
        _this.PI = M;
        return _this;
    }
    CircleX.prototype.circumference = function () {
        return 2 * this.Radius * this.PI;
    };
    return CircleX;
}(Circle));
var object1_1 = new CircleX(45);
var object2_1 = new CircleX(45, 3.141);
console.log("Area =" + object1_1.circumference());
console.log("Area =" + object2_1.Area());
