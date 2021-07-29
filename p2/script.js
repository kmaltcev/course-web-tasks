const buttons = [["MC", "MR", "M+", "M-", "MS"],
    ["2^nd", "𝜋", "e", "C", "⌫"],
    ["x^2", "1/x", "|x|", "exp", "mod"],
    ["√", "(", ")", "n!", "÷"],
    ["x^y", "7", "8", "9", "×"],
    ["10^x", "4", "5", "6", "-"],
    ["log", "1", "2", "3", "+"],
    ["ln", "±", "0", ".", "="]]

const btnDiv = document.getElementById("buttons")

buttons.forEach(row => {
    let rowDiv = document.createElement("div")
    rowDiv.setAttribute("class", "row")
    row.forEach(button => {
        let btn = document.createElement("button")
        let lbl = document.createElement("label")
        btn.setAttribute('type', 'button')
        btn.setAttribute('value', button)
        if (button.match(/.*\^[\d\w]/)) {
            let sup = document.createElement('sup')
            sup.innerText = button.split('^')[1]
            lbl.append(sup)
        }
        lbl.innerText = button.split('^')[0]
        btn.appendChild(lbl)
        if (button.match(/[^0-9.±]/)) btn.setAttribute('class', 'operator')
        btn.onclick = function() {
            btnHandler(this.value)
        }
        rowDiv.appendChild(btn)
    })
    btnDiv.appendChild(rowDiv)
})

const firstRow = document.getElementsByClassName('row')[0]
firstRow.setAttribute("class", "row first")
firstRow.childNodes.forEach(button => button.setAttribute('class', 'operator memory'))

const input = document.getElementsByTagName('button')
const answer = document.getElementById('screen')

input[input.length - 1].setAttribute('class', 'equal')
input[1].disabled = input[2].disabled = input[6].disabled = true

let x, Memory
const memButtons = [input[1], input[2]]

function btnHandler(value) {
    console.log(value)
    switch (value) {
        // ["MC", "MR", "M+", "M-", "MS"]
        case "MC": //Memory Clear
            Memory = undefined
            memButtons.forEach(btn => btn.disabled = true)
            break;
        case "MR": //Memory Read
            answer.value = Memory
            break;
        case "M+": //Memory Plus
            Memory = eval(`${Memory} + ${answer.value}`)
            break;
        case "M-": //Memory Minus
            Memory = answer.value > 0 ? eval(`${Memory} - ${answer.value}`) : eval(`${Memory} + ${answer.value}`)
            break;
        case "MS": //Memory Save
            Memory = answer.value
            memButtons.forEach(btn => btn.disabled = false)
            break;
        // ["2nd", "𝜋", "e", "C", "⌫"]
        case "𝜋":
            answer.value += Math.PI
            break;
        case "e":
            answer.value += Math.E
            break;
        case "C":
            answer.value = ""
            break;
        case "⌫":
            answer.value = answer.value.slice(0, -1)
            break;
        // ["x^2", "1/x", "|x|", "exp", "mod"]
        case "x^2":
            answer.value = Math.pow(answer.value, 2)
            break;
        case "1/x":
            answer.value = 1 / answer.value
            break;
        case "|x|":
            answer.value = Math.abs(answer.value)
            break;
        case "exp":
            answer.value = Math.pow(Math.E, answer.value)
            break;
        case "mod":
            answer.value += "%"
            break;
        // ["√", "(", ")", "n!", "÷"]
        case "√":
            answer.value = Math.sqrt(answer.value)
            break;
        case "n!":
            answer.value = factorial(answer.value)
            break;
        case "÷":
            answer.value += "/"
            break;
        // ["x^y", "7", "8", "9", "×"]
        case "x^y":
            x = answer.value
            answer.value += "^"
            break;
        case "×":
            answer.value += "*"
            break;
        // ["10^x", "4", "5", "6", "-"]
        case "10^x":
            answer.value = Math.pow(10, answer.value)
            break;
        // ["log", "1", "2", "3", "+"]
        case "log":
            answer.value = Math.log10(answer.value)
            break;
        // ["ln", "±", "0", ".", "="]
        case "ln":
            answer.value = Math.log(answer.value)
            break;
        case "±":
            answer.value = answer.value * -1
            break;
        case "=":
            answer.value.replace("--", "+")
            let powXY = answer.value.split("^")
            answer.value = (powXY.length < 2) ? answer.value = eval(answer.value) : Math.pow(powXY[0], powXY[1])
            break;
        default:
            answer.value = (value.match(/[0-9]/) && answer.value === 0) ? value : answer.value + value
    }
}

function factorial(num) {
    let rval = 1;
    for (let i = 2; i <= num; i++)
        rval = rval * i;
    return rval;
}

const credentials = [60, 112, 62, 75, 111, 110, 115, 116, 97, 110, 116, 105, 110, 32, 77, 97, 108, 116, 99, 101, 118, 32, 51, 51, 54, 52, 57, 50, 54, 52, 48, 60, 98, 114, 62, 84, 97, 108, 32, 75, 111, 116, 108, 101, 114, 32, 51, 49, 56, 53, 55, 56, 55, 54, 50, 60, 47, 112, 62]
document.getElementsByTagName('body')[0].insertAdjacentHTML('beforebegin', credentials.map(p => String.fromCharCode(p)).join(""))