function fetchData1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data1");
        }, 1000);
    });
}

function fetchData2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data2");
        }, 500);
    });
}

function fetchData3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data3");
        }, 1500);
    });
}

// 코드 작성
Promise.all([fetchData1(), fetchData2(), fetchData3()]).then((x) => console.log(x))

async function promiseAll() {
    await Promise.all([fetchData1(), fetchData2(), fetchData3()]).then((x) => console.log(x))
    console.log("-----------------------------------------")
}
promiseAll()