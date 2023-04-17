function primeNumber(number)
{
    // 7
    counter = 0
    for(let i =1; i <= number; i++){
        if(number%i == 0){
            counter++
        }
    }
    if(counter==2){
        return "Prime number"
    }
    return "Not a prime number"
}

function primeNumberInRange(start, end)
{
    for(let i = start; i<=end; i++)
    {
        console.log(i + primeNumber(i) )
    }

}

function fibonacci(number)
{
    a = 0
    console.log(a)
    b = 1
    console.log(b)
    for(i = 3; i<=number; i++){
        c = a+b
        a = b
        b = c
        console.log(c)
    }
}

function numberOfDigits_SumOfDigits(number)
{
    count = 0
    sum = 0
    while(number != 0)
    {
        digit = number % 10
        number = Math.floor(number/10)
        sum = sum + digit
        count++
    }
    console.log(count, sum)

}

function reverseNumber(number){
    rev = ""
    while(number>0)
    {
        digit = number %10
        rev = rev + digit
        number = Math.floor(number/10)
    }
    console.log(rev)
}

function inverseOfNumber(number)
{
    //613254    621435
    index = 0
    invertedIndex = 0
    inverse = 0
    while(number>0)
    {
        index++
        digit = number % 10
        inverse = inverse + (index * Math.pow(10, digit-1))
        number = Math.floor(number / 10) 
    }
    console.log(inverse)
}

function GCD_LCM(a, b)
{
    min = a>b ? b : a
    while(min>1)
    {
        if(a%min==0 && b%min==0)
        {
            console.log("GCD is" + min)
            lcm = a * b / min
            console.log("lcm is"+ lcm)
            return
        }
        min--
    }
}

function bejaminBulbs(n)
{
    // All the perfect square will turn on
    for(i=1; i*i<=n; i++)
    {
        console.log(i*i)
    }
}

function frequencyOfDigitInNumber(number, digit)
{
    count = 0
    while(number > 0)
    {
        a = number % 10
        if(a===digit)
        {
            count++
        }
        number = Math.floor(number/10)
    }
    console.log("Frequency of number is", count)
}


frequencyOfDigitInNumber(111111,1)
// bejaminBulbs(20)
// GCD_LCM(9,6)
// inverseOfNumber(613254)
// reverseNumber(76587)
//numberOfDigits_SumOfDigits(54633)
// fibonacci(5)
// console.log(primeNumber(7))
// primeNumberInRange(2,8)
