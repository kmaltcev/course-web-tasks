// HTML DOM

//window.alert('Hello')
//alert('Hi')
//let conf = confirm('Are you sure ?')
//console.log(conf)
//let name = prompt('What is your name ?')
//console.log(name)

//console.log(location.origin)

//let s = document.getElementById('h1')
let h1 = document.querySelector('h1')
console.dir(h1)


let h2 = h1.nextElementSibling
console.log(h2.classList[0])

//let styles = Object.keys(h2.style)
let styles = Array.from(h2.style)
    .filter(s => {
        return h2.style[s] !== '' && h2.style[s] !== undefined
    })
    .map(s => `${s}: ${h2.style[s]}`)

console.log(styles)
console.log(h2.style)

let li = document.querySelectorAll('li:nth-child(2n)')
let li_ar = Array.from(li)

li_ar.forEach(element => {
    element.style.color = 'blue'
    element.addEventListener('click', () => {
        console.log(element.textContent)
    })
})



