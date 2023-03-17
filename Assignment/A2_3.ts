function Maximum(a: number[]): number{
    var max = 0;
    for(let i=0; i<a.length-1; i++){
        for(let j = i+1; j<a.length; j++){
            if(a[i] < a[j]){
                max = a[j]
                a[j] = a[i]
                a[i] = max
            }
        }
    }
    console.log(a)
    return a[1]

}



var a: number[] = [122,2234,34,56,78]
console.log("2nd largest number  is" + Maximum(a))
