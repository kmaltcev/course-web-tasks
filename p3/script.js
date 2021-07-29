const csvToTable = (data) => {
    // create empty array
    const csvData = []

    // this will return each line as an individual String
    const lines = data.split("\n")
    // loop through the lines and return an array of individual
    // Strings within the line that are separated by a comma
    lines.forEach(row => csvData.push(row.split(',')))

    // check the data
    console.log(csvData)

    ///////////////////////////////////////////////////////////////
    // here the csvData 2D array must be converted into html table
    ///////////////////////////////////////////////////////////////
    const table = document.getElementById('table')
    let tr, th, td, prev = csvData[1][4]

    tr = document.createElement('tr')
    csvData[0].forEach(header => {
        th = document.createElement('th')
        th.innerText = header
        tr.appendChild(th)
    })
    table.appendChild(tr)
    csvData.shift()

    csvData.forEach(row => {
        i = 0
        tr = document.createElement('tr')
        row.forEach(column => {
            td = document.createElement('td')
            td.innerText = column

            if (csvData.indexOf(row) > 0 && i === 4) {
                td.setAttribute('class', column >= prev ? 'up' : 'down')
                prev = column
            }

            tr.appendChild(td)
            i++
        })
        table.appendChild(tr)
    })

    console.log(table)
};

fetch("./data/BTC-USD.csv") //?
    .then((response) => response.text())
    .then((v) => csvToTable(v))
    .catch((err) => console.log(err))

const cred = 'PHA+S29uc3RhbnRpbiBNYWx0Y2V2IDMzNjQ5MjY0MDxicj5UYWwgS290bGVyIDMxODU3ODc2MjwvcD4='
document.getElementsByTagName('body')[0].insertAdjacentHTML('beforebegin', atob(cred))