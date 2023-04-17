
// p = "Pratham"
// m = new String("Pratham")

// console.log(typeof p, typeof m)

// console.log(p.length)
// console.log(p.slice(-7,-1))
// console.log(p.substring(2,6))
// console.log(p.substr(1,5))

m = "pratham is a great pop dod tot aeiea asdfgfdsa artist"

k = m.split(" ")
console.log(k)

for(let i = 0; i<k.length; i++){
    var str = k[i]
    console.log(str)
    revstr = ""
    d = str.length-1
    for(let k=d; k>=0;k--){
        revstr = revstr + str.charAt(k)
    }
    console.log(revstr)
    if(revstr === str){
        m = m.replace(str, "MOM")
    }
}

console.log(m)


str1 = "KITE"
str2 = str1.split("")
str2 = str2.reverse()
console.log(str2)
console.log(str2.toString())