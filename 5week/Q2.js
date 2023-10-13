function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
            id,
            name: "John Doe"
        });
        }, 1000);
    });
  }
  
// 코드 작성
getUser(1)
    .then(user => {
        console.log(`사용자 ID: ${user.id}`);
        console.log(`사용자 이름: ${user.name}`);
        console.log("-----------------------------------------")
    })
    .catch(error => {
        console.error(`오류 발생: ${error}`);
        console.log("-----------------------------------------")
    });