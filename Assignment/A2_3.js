function Maximum(a) {
    // var max = 0;
    // for(let i=0; i<a.length-1; i++){
    //     for(let j = i+1; j<a.length; j++){
    //         if(a[i] < a[j]){
    //             max = a[j]
    //             a[j] = a[i]
    //             a[i] = max
    //         }
    //     }
    // }
    // console.log(a)
    // return a[1]
    var largest = -Infinity;
    var seclargest = -Infinity;
    for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
        var num = a_1[_i];
        if (num > largest) {
            seclargest = largest;
            largest = num;
        }
        else if (num > seclargest && num != largest) {
            seclargest = num;
        }
    }
    console.log(seclargest);
    return seclargest;
}
var a = [122, 2234, 34, 56, 78];
console.log("2nd largest number  is" + Maximum(a));
/*  other methods possible are:
    1. arr.sort(function(a,b){return b-a})
    2. Double for loop method
    3. If  else If method
*/ 
