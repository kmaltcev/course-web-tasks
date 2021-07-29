const fc = () => {return this}

function fc2 () {return this}

class SomeClass {
    constructor() {}
    fc3() {return this}
}

let a = fc()
let b = fc2()
let c = new SomeClass().fc3()
console.log("A", a)
console.log("B", b)
console.log("C", c)

var obj1 = {
    a: 'a',
    test: () => {
        console.log("Obj1:", this.a)
    }
 }
 
 var obj2 = {
    a: 'a',
    test: function() {
        console.log("Obj2:", this.a)
    }
 }
 
 obj1.test() // шо выведется?
 obj2.test() // шо выведется?