function Maximum(a:  number, b: number, c: number): number{
    if(a>b){
        if(a>c){
            return  a
        }
        else{
            return c
        }
    }
    else{
        if(b>c){
            return b
        }
        else{
            return c
        }
    }
}

var max = Maximum(100,28,8)
console.log("Maximum number is "+  max)