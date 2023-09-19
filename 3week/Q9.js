// - 목적: 카테고리에 해당하는 책과 평균 페이지를 반환하는 함수 작성
// - 다음 함수를 완성하여 전달된 도서 목록과 카테고리에 따른 도서 제목과 평균 페이지 수를 반환하세요.

function getBooksStatsByCategory(books, category) {
	// 코드 작성
    let titleAndPages = {};
    let booksCategory = [];
    let sum = 0;
    let div = 0;

    books.forEach((x) => {
        if (x.category == category) {
            booksCategory.push(x.title);
            sum += x.pages;
        }
    })
    div = sum / booksCategory.length;

    titleAndPages.title = booksCategory;
    titleAndPages.avgPages = div;

    return titleAndPages;

}

const books2 = [
	{ title: "The Hobbit", category: "novel", pages: 310 },
	{ title: "Harry Potter", category: "novel", pages: 450 },
	{ title: "JavaScript for Beginners", category: "programming", pages: 200 },
	{ title: "Python Crash Course", category: "programming", pages: 250 },
	{ title: "Eloquent JavaScript", category: "programming", pages: 280 },
	{ title: "Crime and Punishment", category: "novel", pages: 480 },
];

console.log(getBooksStatsByCategory(books2, "programming"));
// { titles: ["JavaScript for Beginners", "Python Crash Course", "Eloquent JavaScript"], avgPages: 243.333 } 출력
console.log(getBooksStatsByCategory(books2, "novel"));
// { titles: ["The Hobbit", "Harry Potter", "Crime and Punishment"], avgPages: 413.333 } 출력
console.log("----------------------------------------")