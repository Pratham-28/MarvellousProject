// Write application which perform addition & subtraction of 2 numbers

class Arithmetic
{
    No1: number;
    No2: number

    constructor(A:number, B:number){
        this.No1 = A
        this.No2 = B
    }

    Addition(): number{
        return this.No1 + this.No2
    }

    Subtraction():number{
        return this.No1 - this.No2
    }

    

}

var obj1 = new Arithmetic(6,4)
var obj2 = new Arithmetic(6,2)

console.log(obj1.Addition(), obj1.Subtraction())
console.log(obj2.Addition(), obj2.Subtraction())