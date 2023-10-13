function fetchData(id) {
    // 코드 작성
    return new Promise((res, rej) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 2) + 1

            if (id === randomNumber) {
                res({
                    result: 'success',
                    id
                })
            }else {
                rej({
                    error: 'fail',
                    message: 'Something went wrong'
                })
            }
        }, 1000)
    })

}
  
fetchData(1)
.then((data) => {
    console.log(data); // {result: 'success', id: 1}
    console.log("-----------------------------------------")
})
.catch((error) => {
    console.log(error); // {error: 'fail', message: 'Something went wrong.'}
    console.log("-----------------------------------------")
});