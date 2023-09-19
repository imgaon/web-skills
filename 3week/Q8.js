// - 목적: 도서 목록 배열에서 특정 카테고리에 속한 도서 제목을 배열로 반환하는 함수 작성
// - 도서 목록 배열(bookArray)와 카테고리(category)를 이용하여, 해당 카테고리에 속한 도서 제목을 배열로 반환해주세요.

function getBooksByCategory(books, category) {
	// 코드 작성
    let booksCategory = [];

    books.forEach((x) => {
        if (x.category == category) {
            booksCategory.push(x.title);
        }
    })

    return booksCategory;
}

const books = [
	{ title: "The Hobbit", category: "novel" },
	{ title: "Harry Potter", category: "novel" },
	{ title: "JavaScript for Beginners", category: "programming" },
	{ title: "Python Crash Course", category: "programming" },
];

console.log(getBooksByCategory(books, "programming")); // ["JavaScript for Beginners", "Python Crash Course"] 출력
console.log("----------------------------------------")