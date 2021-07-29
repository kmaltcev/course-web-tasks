// context
let person = {
    Name: 'John Connor',
    Age: '25',
    IsStudent: false,
    Languages: ['en', 'he'],
    Greet(name) {
        return name // false for undefined, null
            ? `Hello ${name}, my name is ${this.Name}!`
            : 'Name is undefined'
    }
}

let logger = {
    keys() {
        console.log(Object.keys(this))
    },
    keysAndValues() {
        const _this = this
        Object.keys(this).forEach(function (k, i, ar) {
            console.log(`${k}: ${_this[k]}`)
        })
    }
}

logger.keys()
//let keys = logger.keys.bind(person)
//keys()
logger.keys.call(person)
logger.keysAndValues.call(person)


/* const _this = this
    Object.keys(this).forEach(function(k,i,ar){
        console.log(`${k}: ${_this[k]}`)
    })   */

/* Object.keys(this).forEach(function (k, i, ar) {
        console.log(`${k}: ${this[k]}`)
    }.bind(this))
     */
/* Object.keys(this).forEach((k,i,ar)=>{
    console.log(`${k}: ${this[k]}`)
}) */