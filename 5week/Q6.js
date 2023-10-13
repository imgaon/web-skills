function findUserByName(name) {
    const users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
        { id: 4, name: 'Charlie' },
        { id: 5, name: 'Charlie' }
    ];

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 코드 작성
            const foundUsers = users.filter(user => user.name === name);
            if (foundUsers.length > 0) {
                resolve(foundUsers)
            }else {
                reject("해당유저를 찾을 수 없습니다.")
            }
        }, 1000);
    });
}

findUserByName("Bob")
.then(user => {
    console.log(user)
    console.log("-----------------------------------------")
})
.catch(error => {
    console.log(error)
    console.log("-----------------------------------------")
})