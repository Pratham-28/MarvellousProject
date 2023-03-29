




function summation(arr: number[], name: string): string{
    var sum : any = 0
    for(var i = 0; i< arr.length; i++){
        sum = sum + arr[i]
    }
    console.log(name + "   spend   " + sum)
    return sum
}

var week : number[] = [10,20,30,40,50]

var ret = summation(week, 4)
console.log(ret)
