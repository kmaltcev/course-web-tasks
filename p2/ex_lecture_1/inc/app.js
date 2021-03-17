const addRow = (container,content) =>{
    const row = `<div class="row">${content}</div>`
    container.insertAdjacentHTML('beforeend',row)
}

const addMonitor = (container,text) => {
    let t = text ?? ''
    const monitor = `<div id="monitor">${t}</div>`
    addRow(container,monitor)
}

const button = (text) => {
    let c = text === 'calculate' ? 'wide' : ''
    return `<div class="d-btn ${c}">${text}</div>`
}

const nums = [1,2,3,4,5,6,7,8,9,0,'+','-','*','/','**','calculate','clear']
const closingDiv = '<div style="clear:both"></div>'

const click = (event) =>{
    let monitor = document.getElementById('monitor')
    let bac = monitor.innerText.trim()
    let a = event.target.innerText
    console.log(a)
    if(a==='clear'){
        monitor.innerText = ''
    }else if(a==='calculate'){
        monitor.innerText = bac + '=' + eval(bac)
    }else{
        monitor.innerText += a
    }
}
// 3 === '3' => false

/////////////////// html generation //////////////////////////////////
const div = document.getElementById('app') 
// monitor row
addMonitor(div)
// button rows
let butHtml = nums.map(n=>button(n)).join('') + closingDiv

addRow(div,butHtml)

document.querySelectorAll('.d-btn')
        .forEach(el=>{
            el.addEventListener('click',click)
        })