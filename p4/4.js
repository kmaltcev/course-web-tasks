const btnAdd = document.querySelector('button.new')
const btnSave = document.querySelector('button.save')
const btnBegin = document.querySelector('button.begin')
const btnErase = document.querySelector('button.erase')
const studentsList = document.querySelector('.right ul')
const dataList = document.querySelectorAll('.data li')
let inputFields = []
let selectedStudent;
let data = {
    students: [{
        id: "אלוןכהן",
        firstname: 'אלון',
        lastname: "כהן",
        age: 29,
        address: 'כרמיאל, רח ערבה 9',
        phone: '051-4445556'
    },
        {
            id: 'אנהליפקין',
            firstname: 'אנה',
            lastname: 'ליפקין',
            age: 25,
            address: 'כרמיאל, רח ערבה 8',
            phone: '050-4445556'

        },
        {
            id: 'אחמדשייח',
            firstname: 'אחמד',
            lastname: 'שייח',
            age: '13',
            address: 'כרמיאל, רח ערבה 10',
            phone: '052-4445556'
        }]
}
localStorage.setItem('data', JSON.stringify(data))
dataList.forEach(item => {
    let input = document.createElement('input')
    input.setAttribute('type', 'text')
    inputFields.push(input)
})

const createInput = () => dataList.forEach((item, idx) => item.appendChild(inputFields[idx]))

const saveInput = () => {
    let id = getID(inputFields[0].value, inputFields[1].value);
    if (id && !data.students.find(el => el.id === id)) {
        data.students.push({
            id: id,
            firstname: inputFields[0].value,
            lastname: inputFields[1].value,
            age: inputFields[2].value,
            address: inputFields[3].value,
            phone: inputFields[4].value
        })
        inputFields.map(el => el.remove())
        localStorage.setItem('data', JSON.stringify(data))
    } else inputFields.map(el => el.remove())
}
let liList = []
const loadStudents = () => {
    let s = localStorage.getItem('data')
    Array.from(studentsList.childNodes).forEach(el => el.remove())
    Array.from(dataList).forEach(el => el.innerText = '')
    if (s) {
        data = JSON.parse(s)
        data.students.forEach(student => {
            let id = getID(student.firstname, student.lastname)
            let li = document.createElement('li')
            li.innerText = `${student.firstname} ${student.lastname}`
            li.addEventListener('click', (e) => {
                unselectAll()
                e.target.setAttribute('class', 'selected')
                studentDataLoader(id)
            })
            liList.push(li)
            studentsList.appendChild(li)
        })
    }
}

const unselectAll = () => liList.map(li => li.removeAttribute('class'))

const studentDataLoader = (selected) => {
    selectedStudent = data.students.find(student => selected === student.id)
    console.log(data, selectedStudent, selected)
    dataList[0].innerText = selectedStudent.firstname
    dataList[1].innerText = selectedStudent.lastname
    dataList[2].innerText = selectedStudent.age
    dataList[3].innerText = selectedStudent.address
    dataList[4].innerText = selectedStudent.phone
}

const eraseStudent = () => {
    data.students = data.students.filter(student => selectedStudent.id !== student.id)
    localStorage.setItem('data', JSON.stringify(data))
    loadStudents()
}

const getID = (firstname, lastname) => {
    return `${firstname}${lastname}`.toLowerCase()
}

btnAdd.addEventListener('click', () => createInput())
btnSave.addEventListener('click', () => saveInput())
btnBegin.addEventListener('click', () => loadStudents())
btnErase.addEventListener('click', () => eraseStudent())

const credentials = [60, 112, 62, 75, 111, 110, 115, 116, 97, 110, 116, 105, 110, 32, 77, 97, 108, 116, 99, 101, 118, 32, 51, 51, 54, 52, 57, 50, 54, 52, 48, 60, 98, 114, 62, 84, 97, 108, 32, 75, 111, 116, 108, 101, 114, 32, 51, 49, 56, 53, 55, 56, 55, 54, 50, 60, 47, 112, 62]
document.getElementsByTagName('body')[0].insertAdjacentHTML('beforebegin', credentials.map(p => String.fromCharCode(p)).join(""))