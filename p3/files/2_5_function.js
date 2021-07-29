// functions
// function declaration ES5
function greet1(name) {
    console.log('Hello ' + name + '!')
}

// function expression ES6
const greet2 = function (name) {
    console.log(`Hello ${name}!`)
}

// arrow function ES6
const greet3 = name => console.log(`Hello ${name}!`)
const greet4 = (fromname, toname) => {
    let g = `Congratulations from ${fromname} to ${toname}!`
    console.log(g)
}

greet1('Haim')
greet2('Libi')
greet3('David')
greet4('Alex', 'Ora')

/* console.log(greet1)
console.dir(greet2)
console.dir(greet3) */

// anonymous function
let counter = 0
const interval = setInterval(() => {
    if (counter === 5)
        clearInterval(interval)
    else
        console.log(++counter)
}, 1000)

// default arguments
const sum = (a = 20, b = 10) => a + b
console.log(sum(12,5))
console.log(sum())

const sumAll = (...all) =>{
    console.log(all)   
    /* let total = 0
    for(let num of all){
        total += num
    }
    return total */
    return all.reduce((sum,a)=>{
        sum +=a
        return sum
    },0)
}
console.log(sumAll(1,2,3,4,5,6))


 