function ChkSum( a : string){
    var  b =  a.split(" ")
    for(let i=0; i<b.length; i++){
        if(b[i]==="Marvellous"){
            return true
        }
    }
    return  false
}

console.log(ChkSum("Pune Kothrud Marvellous Infosystems"))