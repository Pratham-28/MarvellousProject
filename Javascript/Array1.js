// var a = [1,3,5,7,"Pratham"]

// var b = new Array("k", 3, 4, "Prathamesh", "Ritesh", "Karma", 4,5,6,4,3, 5,3,21,24,214,"djfa", "dfda", "dfd")

// console.log(a.length, b.length)

function spanOfArray(arr)
{
    // [1,3,6,2,8]
    min = arr[0]
    max = arr[0]
    for(let i =1; i<arr.length;i++)
    {
        if(arr[i]>max)
        {
            max = arr[i]
        }
        if(arr[i]<min)
        {
            min = arr[i]
        }
    }
    console.log(min, max)
    span = max -min
    console.log(max -  min)
}

function indexOfDigit(arr, digit)
{
    for(let i = 0; i<arr.length; i++)
    {
        if(digit === arr[i])
        {
            console.log("Indes is", i)
            return
        }
    }
    console.log("-1")

}

function barChart(arr)
{
    // [1,4,5,3]
    max = arr[0]
    for(let i =1; i<arr.length;i++)
    {
        if(arr[i]>max)
        {
            max = arr[i]
        }
    }

    row = max

    console.log(max)
    for(let k =1; k<=row; k++)
    {
        str = ""
        for(let m = 0; m < arr.length; m++)
        {
            if(arr[m] >= max)
            {
                str = str + "*"
            }
            else
            {
                str = str + " "
            }  
        }
        console.log(str)
        max--
    }
}

function sumOfTwoArrays(arr1, arr2)
{
    // [1,2,3] [4,5,6,9]


    k = (arr1.length > arr2.length ? arr1.length : arr2.length)
    sum  = []
    i = arr1.length -  1
    j = arr2.length - 1
    k = k - 1
    c = 0

    while(k>=0)
    {
        d = 0
        if(i >= 0)
        {
            d += arr1[i] 
        }

        if(j >= 0)
        {
            d += arr2[j] 
        }

        m = d + c

        n = m %  10
        c = Math.floor(m/10)

        sum[k] = n
        i--
        j--
        k--
    }
    // if(c!=0)
    // {
    //     sum
    // }
    console.log(sum)
}
sumOfTwoArrays([3,4,2,9], [7,8,9,5])

// barChart([1,4,2,3])
// indexOfDigit([5000,2000,7,99,3], 99)
// spanOfArray([5000,2000,7,99,3]
