function Maximum(a : number[]):  number{
    var max =  a[0];
    for(let i=0;  i<a.length; i++){
        if(a[i]>max){
            max  = a[i]
        }
    }
    console.log(max)
    return  max;
}

var a:number[] = [23,89,6,29,56,45,77,32]
Maximum(a)