function Percentage(Marks:  number = 100, Outof:  number = 500 ):  number
{
    let ans : number =  0
    ans = (Marks  /  Outof) * 100
    return  ans
}

var per :  number =  0
per =  Percentage(220)
console.log("Percetage is "+ per)
per =  Percentage(220, 300)
console.log("Percetage is "+ per)
per =  Percentage()
console.log("Percetage is "+ per)

//  default parameter should  be at  the end of list
// 

//   optional parameter 
function Area(Rad: number, PI ?: number): number
{
    let Ans: number = 0
    if(PI === undefined){
        PI = 3.14
    }
    Ans = PI * Rad *  Rad
    return Ans
}

console.log("Area is "+  Area(20.3,3.14))


// Rest parameter - variable no of argumentd
//function addition(Arr: number[]): number - different than rest
function addition(...Arr: number[]): number
{
    let sum: number = 0
    var cnt: number = 0
    for(cnt =  0; cnt < Arr.length; cnt++){
        sum = sum + Arr[cnt]
    }
    return sum

}

var Ret: number = 0;

Ret = addition(10,20)
console.log("Result is "+  Ret)

Ret = addition()
console.log("Result is "+  Ret)

Ret = addition(10,20,30,40,400)
console.log("Result is "+  Ret)


