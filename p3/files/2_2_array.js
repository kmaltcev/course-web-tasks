console.log('Hello ORT from JS')

// js basic - part 2
// array methods
const numbers = [-3, -2, -1, 0, 2, 4, 5, 7, 8, 12]
console.log('original:', numbers)
// map 
const doubled1 = numbers
    .map(function (n) {
        return n ** 2
    })
const doubled2 = numbers.map(n => n ** 2)
console.log('doubled:', doubled2)

// sort
const sorted = numbers.sort((a, b) => b - a)
console.log('sorted:', sorted)

// filter
const filtered = numbers.filter(a => a > 0)
console.log('filtered:', filtered)

// accumulated
const sum = numbers.reduce((acc, element, index, arr) => {
    acc += element
    return acc
}, 0)
console.log('sum:', sum)

// loop
numbers.forEach((a, i) => console.log(`Element ${i} is ${a}`))

// enumeration
for (let el of numbers) {
    console.log(typeof el)
}