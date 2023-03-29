class Arithmetic
{
    Number1: number;
    Number2: number;

    constructor(N: number, M:number){
        this.Number1 =  N
        this.Number2 = M
    }

    Addition(){
        return this.Number1 + this.Number2
    }

    Subtraction(){
        return this.Number1 - this.Number2
    }

    Multiplication(){
        return this.Number1 * this.Number2
    }

    Division(){
        return this.Number1 / this.Number2
    }

}

var obj1 = new Arithmetic(15,10)
console.log("Addition is"+ obj1.Addition())
console.log("Subtraction is"+ obj1.Subtraction())
console.log("Multiplication is"+ obj1.Multiplication())
console.log("Division is"+ obj1.Division())

var obj2 = new Arithmetic(12,10)
console.log("Addition is"+ obj2.Addition())
console.log("Subtraction is"+ obj2.Subtraction())
console.log("Multiplication is"+ obj2.Multiplication())
console.log("Division is"+ obj2.Division())