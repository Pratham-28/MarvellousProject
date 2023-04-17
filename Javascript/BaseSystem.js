function sum(number)
{
    // 186

    sum = 0

    while(number>0)
    {
        temp = number % 10
        sum = sum + temp
        number = Math.floor(number / 10)
    }
    return sum
}

console.log(sum(1234567))

