function Summation(a: number[]): number{
    var  sum  = 0;
    for(let i = 0; i< a.length; i++){
        sum = sum  + a[i]
    }
    return sum
}

var a:number[] = [23, 6,  7, 4, 5, 7]
console.log("sum is  " +Summation(a))