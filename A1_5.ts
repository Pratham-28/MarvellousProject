function  fibonacci(a:  number){
    var f0  =0;
    var  f1 = 1;
    console.log(  f0 +   f1)
    var  r  = f0 + f1
    while(r  <= a){
        console.log( r)
        f0  = f1
        f1  = r
        r  = f0  + f1
    }
}

fibonacci(21)