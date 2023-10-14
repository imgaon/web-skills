// setTimeout(() => {
//     console.log("Hello, World!")
// }, 1000)

function print() {
    console.time();
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("-----------------------------------------")
            console.log("Hello, World!")
            res()
            console.timeEnd();
            console.log("-----------------------------------------")
        }, 1000)
    })
}

print()
