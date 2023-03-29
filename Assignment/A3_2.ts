class Circle{
    Radius: number
    PI: number

    constructor(N:number, M:number = 3.14){
        this.Radius = N
        this.PI = M
    }

    Area(){
        return this.PI * this.Radius * this.Radius
    }
}

var object1 = new Circle(45)

var object2 = new Circle(45, 3.141)

console.log("Area =" + object1.Area())

console.log("Area =" + object2.Area())

class CircleX  extends Circle{
    Radius: number
    PI: number


    constructor(N:number, M:number = 3.14){
        super(N,  M)
        this.Radius = N
        this.PI = M
    }

    circumference(){
        return  2*this.Radius*this.PI
    }

}

var object1_1 = new CircleX(45)

var object2_1 = new CircleX(45, 3.141)

console.log("Circumference =" + object1_1.circumference())

console.log("Area =" + object2_1.Area())