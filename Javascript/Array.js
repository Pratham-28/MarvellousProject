// Array all methods

p = [1,3,4,5]
const k = new Array(3,4,5)

m = ["A", "B", "c", 4, 7, 8]

console.log(m.length)
console.log(m.toString())
console.log(m.join(" "))
console.log(m.push("O"))
console.log(m.pop())
console.log(m.shift())
console.log(m.unshift("hello"))
delete m[0]
console.log(m)
console.log(m.concat(p))
m.splice(3,0,4,5)
console.log(m)

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(3);
console.log(citrus)

const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);
console.log(over18)

function myFunction(value, index, array) {
  return value > 18;
}

const numbers2 = [45, 4, 9, 16, 25];
let allOver18 = numbers2.every(myFunction);
console.log(allOver18)

function myFunction(value) {
  return value > 18;
}

const numbers1 = [ 16, 25];
let sum = numbers1.reduce(myFunction, 100);
console.log(sum)

function myFunction(total, value) {
  return total + value;
}

