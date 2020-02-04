let succallbacks = []
let failcallbacks = []

class Promisellw {
    constructor (fn) {
        succallbacks = []
        failcallbacks = []
        fn(this.resolve, this.reject)
    }

    then (thenFn) {
        succallbacks.push(thenFn)
        return this
    }

    catch (catchFn) {
        failcallbacks.push(catchFn)
        return this
    }

    resolve (value) {
        console.log(succallbacks)
        succallbacks.forEach(callback => {
            callback(value)
        })
    }

    reject (value) {
        failcallbacks.forEach(callback => {
            callback(value)
        })
    }
}

function llwFn () {
    return new Promisellw((resolve, reject) => {
        let data = 123
        setTimeout(() => {
            resolve(data)
        }, 1000)
    })
}

llwFn().then((res) => {
    console.log(456, res)
})