// Object is like a car having properties & functionalities
// Object has variable & method

var p = {
    name: "pratham",
    "age": 34,
    fullName: function(sirname){
        return this.name + sirname
    }
}

console.log(p.a)
console.log(p.age, p["age"], p.fullName("yeole"))
console.log(p.fullName)


