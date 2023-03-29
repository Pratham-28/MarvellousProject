function subArray(a: number[]){
    for(let i =  0; i<a.length-1; i++){
        for(let j =i+1; j< a.length; j++){
            console.log(a[j])

        }
        
    }
}

subArray([1,2,3])