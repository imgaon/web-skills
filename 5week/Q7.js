function findPublisherByBookName(bookName) {
    const books = [
        { id: 1, name: 'Book1', publisher: 'Publisher1' },
        { id: 2, name: 'Book2', publisher: 'Publisher2' },
        { id: 3, name: 'Book3', publisher: 'Publisher3' },
    ];

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 코드 작성
            const findPulisher = books.find(book => book.name === bookName)
            if (findPulisher) {
                resolve(findPulisher.publisher)
            }else {
                reject("해당 책이 존재하지 않은 것 같습니다.")
            }
        }, 1000);
    });
}

findPublisherByBookName("Book1")
    .then(publisher => {
        console.log(publisher);
        console.log("-----------------------------------------")
    })
    .catch(error => {
        console.log(error)
        console.log("-----------------------------------------")
    })