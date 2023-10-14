async function checkId(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 코드 작성
      // 아이디가 존재하는 아이디인지 확인
      const user = [
        {
          id: "1",
          name: "John",
          role: "admin"
        },
        {
          id: "2",
          name: "Alice",
          role: "user"
        }
      ];
      
      const foundUser = user.find(user => user.id == id);
      if (foundUser) {
        resolve(foundUser.role);
      } else {
        reject("일치하는 id를 찾지 못하였습니다.");
      }
    }, 1000);
  });
}

// 코드 작성
function callCheckId(id) {
  // checkId 호출
  // 존재하는 아이디라면 관리자인지 확인
  checkId(id)
    .then((role) => {
      if (role === "admin") {
        console.log("해당 유저는 admin입니다.");
        console.log("-----------------------------------------")
      } else {
        console.log("해당 유저는 admin이 아닙니다.");
        console.log("-----------------------------------------")
      }
    })
    .catch((error) => {
      console.log(error);
      console.log("-----------------------------------------")
    });
}

callCheckId(1);

