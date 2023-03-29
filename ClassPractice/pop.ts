
function Addition(No1:  number, No2: number  ): number{
    let Ans: number = 0;
    Ans = No1 + No2
    return Ans
}

function Subtraction(No1: number, No2: number): number{
    let Ans : number = 0
    Ans = No1 - No2
    return Ans
}

var A: number = 11
var B: number = 10
var ret: number = 0


ret = Addition(10,65)
console.log("Addition is "+ ret)
ret = Subtraction(45,56)
console.log("Subtraction is "+ ret)


