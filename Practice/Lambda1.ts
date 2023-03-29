// named function
function add(a: number, b:number): void
{
    console.log("sum is"+ (a+b))

}

add(10,20)


//  Anonymous Function

var Ret =  function(A: number, B:number): number
{
    return A + B
}

console.log(Ret)


// Lambda Statement
// Fat Arrow :   => : writee lambda function


var Ret = (A: number, B:number) => {
    console.log("Inside Lambda")
    return  A+B
}

console.log(Ret(10,11))


// Lambda  Expreession
var Ret = (A: number, B:number) =>  A+B;
console.log("ans is "+ Ret(15,15)) 


