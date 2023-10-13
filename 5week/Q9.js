function getText1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello, ");
        }, 1000);
    });
}

function getText2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("World! ");
        }, 500);
    });
}

function getText3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("This is a test.");
        }, 1500);
    });
}

// 코드 작성
getText1()
.then(text1 => {
    getText2()
    .then(text2 => {
        getText3()
        .then(text3 => {
            console.log(text1 + text2 + text3)
        })
    })
})

Promise.all([getText1(), getText2(), getText3()]).then(value => {
    const str = value.join("")
    console.log(str)
})

async function getText123() {
    await Promise.all([getText1(), getText2(), getText3()]).then(value => {
        const str = value.join("")
        console.log(str)
    })
}
getText123()