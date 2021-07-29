//console.log('Hello ORT from JS')

// js basic - part 3
// objects
let person = {
    // properties
    Name: 'John Connor',
    Age: '25',
    IsStudent: false,
    Languages: ['en','he'],
    // methods
    //Greet: function(name){ } // old 
    Greet(name){
        return name // false for undefined, null
            ? `Hello ${name}, my name is ${this.Name}!`
            : 'Name is undefined'
    }
}

console.log('type:',typeof person)
console.log('object:',person)

console.log(person.Greet())

const name = 'Alex Kesleman'
console.log(person.Greet(name))

// enumeration
for(let propName in person){
    let propType = typeof person[propName]
    console.log(`${propName}: ${propType}` )
}

// json methods
let jsonStr = JSON.stringify(person)
console.log('jsonStr:', jsonStr)

let jsonObj = JSON.parse(jsonStr)
console.log('jsonObj:', jsonObj)

// clone and destructuring
let newPerson = {...person}
console.log('newPerson:', newPerson)

let {Name,Age} = person
console.log(Name,Age)

let {Name: name1,Age:age1, ...Rest} = person
console.log(name1,age1)
console.log('Rest',Rest)