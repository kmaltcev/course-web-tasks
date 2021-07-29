// asynchrony
/* const timout = setTimeout(() =>{
    console.log('after timeout')
},2000) */

const delay = (wait = 2000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve(`after delay ${wait} ms`)
            reject('something wrong')
        }, wait)
    })
    return promise
}

// then-catch model
// first 
/* delay(3000)
    .then(data1 => {
        console.log(data1)
        // second
        delay(1000)
            .then(data2 => {
                console.log(data2)
                // third
                delay(4000)
                    .then(data3 => {
                        console.log(data3)
                        // action after all delays
                        console.log('before delay 2')
                    })
            })
    })
    .catch(er => {
        console.error(er)
    })
    .finally(() => {
        console.log('finally')
    })

console.log('before delay 1') */

// await model
/* async function asyncDemo(){
    let s = await delay(3000)
    console.log(await delay(3000))
    console.log(await delay(1000))
    console.log(await delay(4000))
    console.log('before delay 2')
}

console.log('before delay 1')
asyncDemo() */

// with error
async function asyncDemo() {
    try {
        let s = await delay(3000)
        console.log(await delay(3000))
        console.log(await delay(1000))
        console.log(await delay(4000))
        console.log('before delay 2')
    } catch (error) {
        console.log(error)
    } finally {
        console.log('finally')
    }
}

console.log('before delay 1')
asyncDemo()