console.log('Hello ORT from JS')

// js basic - part 1

// numbers
/* let a = 12
const b = 5

console.log('a+b:',a+b)
console.log('a++:',a++)
console.log('++a:',++a) */

// int
/* let x = 9007199254740991
let y = 5

console.log(x)
console.log(y)
let z = x*y
console.log('x*y:', z)
console.log(typeof z)
 */
// bigint
/* let xn = 9007199254740991n
let yn = 5n
let zn = xn * yn

console.log(xn)
console.log(yn)
console.log('xn*yn:', zn)
console.log(typeof zn) */

// mutation
let age = 25
//console.log('I"m ' + age)

// string
const position = 'lecturer'
const fName = 'Alex'
const lName = 'Keselman'
let str1 = 'My ' + position + ' is ' + fName + ' ' + lName
let str2 = `My ${position} is ${fName} ${lName}`
//console.log(str2)


// classic
let res1
if (fName === 'Alex' && lName === 'Keselman') {
    res = 'my lecturer'
} else {
    res = 'sombody else'
}
// new (ternary operator)
let res2 = (fName === 'Alex' && lName === 'Keselman')
    ? 'my lecturer' : 'sombody else'

// array basic methods
let numbers = [1, 2, 3, 4, 5, 'six', true]
console.log('array:', numbers)
console.log('type:', typeof numbers)
console.log('size:', numbers.length)
console.log('typeof undefined:', numbers[1])
// add first element
numbers.unshift(0)
// add last element
numbers.push(20)
// simple find 
let n = numbers.indexOf(1) // -1 if not found
console.log('changed array:', numbers)

