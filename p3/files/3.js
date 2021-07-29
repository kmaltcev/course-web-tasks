let items = []

const add = () => {
    let newItem = document.getElementById('newItem').value
    if (items.indexOf(newItem) === -1 && items.indexOf(newItem) !== '') {
        items.push(newItem)
        document.getElementById('newItem').value = ''
        createList()
        document.getElementById('newItem').focus()
    }
}

const createList = () => {
    let div = document.querySelector('#content')
    if (div.firstChild) div.removeChild(div.firstChild)

    let ul = document.createElement('ul')
    div.appendChild(ul)

    items.forEach(i => {
        let li = document.createElement('li')
        li.innerText = i
        ul.appendChild(li)
    })
    save()
}

const save = () => {
    let s = JSON.stringify(items)
    localStorage.setItem('items', s)
}

const restore = () => {
    let s = localStorage.getItem('items')
    if (s !== undefined) {
        items = JSON.parse(s)
        createList()
    }
}

const clearItems = () => {
    items = []
    let div = document.querySelector('#content')
    if (div.firstChild) div.removeChild(div.firstChild)
    localStorage.removeItem('items')
}

restore()