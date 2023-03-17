function DisplayFactors(a:  number){
    for(let i=1; i<a; i++){
        if(a%i==0){
            console.log(i)
        }
    }
}

DisplayFactors(20)