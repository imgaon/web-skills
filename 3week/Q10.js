// - 목적: 책을 검색하는 함수 작성
// - 주어진 도서 목록 배열에서 각 카테고리별 도서 제목, 총 페이지 수 및 해당 도서의 가격 범위를 만족하는 총 가격을 반환하세요.
// - 또한, 특정 페이지 범위와 가격 범위를 지정하면 해당 범위 내의 도서만 결과에 포함되도록 해주세요.
// - category 옵션은 선택적으로 포함할 수 있으며, category가 있을 경우, category에 해당하는 책들만 반환해주세요.

const defaultFilterOptions = {
	minPages: 0, 
    maxPages: Infinity, 
    minPrice: 0, 
    maxPrice: Infinity,
	category: undefined // 선택 사항
}
//minPages: 200, maxPages: 370, minPrice: 15, maxPrice: 20

function searchBooks(books, options = defaultFilterOptions) {

    let tmparr = [];
    const booksIfo = {};

    for (let i = 0; i < books.length; i++) {
        if( books[i].pages >= options.minPages && books[i].pages <= options.maxPages  && books[i].price >= options.minPrice  && books[i].price <= options.maxPrice ) {
            if( options.category ) {
                if(books[i].category == options.category) {
                    tmparr.push(books[i])
                    booksIfo[books[i].category] = { title: [], totalPages: 0, totalPrices: 0 };
                }
            } else {
                tmparr.push(books[i])
                booksIfo[books[i].category] = { title: [], totalPages: 0, totalPrices: 0 };
            }
        }
    }
    
    let keys = Object.keys(booksIfo)
    tmparr.forEach(x => {
    for (let i = 0; i < keys.length; i++) {
            if (keys[i] == x.category) {
                booksIfo[keys[i]].title.push(x.title)
                booksIfo[keys[i]].totalPages += x.pages
                booksIfo[keys[i]].totalPrices += x.price
            }
        }
    })
    return booksIfo
}

const books3 = [
	{ title: "The Hobbit", category: "novel", pages: 310, price: 13 },
	{ title: "Harry Potter", category: "novel", pages: 450, price: 28 },
	{ title: "JavaScript for Beginners", category: "programming", pages: 200, price: 15 },
	{ title: "Python Crash Course", category: "programming", pages: 250, price: 18 },
	{ title: "Eloquent JavaScript", category: "programming", pages: 280, price: 20 },
	{ title: "Crime and Punishment", category: "novel", pages: 480, price: 27 },
	{ title: "JavaScript: The Good Parts", category: "programming", pages: 170, price: 10 },
	{ title: "To Kill a Mockingbird", category: "novel", pages: 320, price: 15 },
];

console.log(searchBooks(books3));
/* 
{
  novel: { titles: ["The Hobbit", "Harry Potter", "Crime and Punishment", "To Kill a Mockingbird"], totalPages: 1560, totalPrices: 83 },
  programming: { titles: ["JavaScript for Beginners", "Python Crash Course", "Eloquent JavaScript", "JavaScript: The Good Parts"], totalPages: 900, totalPrices: 63 }
}
출력
*/


console.log(searchBooks(books3, { minPages: 200, maxPages: 370, minPrice: 15, maxPrice: 20}));
/*
{
  novel: { titles: ["The Hobbit", "To Kill a Mockingbird"], totalPages: 630, totalPrices: 28 },
  programming: { titles: ["JavaScript for Beginners", "Python Crash Course", "Eloquent JavaScript"], totalPages: 730, totalPrices: 53 }
}
출력
*/

console.log(searchBooks(books3, { minPages: 200, maxPages: 370, minPrice: 15, maxPrice: 20, category: "novel"}));
console.log(searchBooks(books3, { minPages: 200, maxPages: 250, minPrice: 15, maxPrice: 20, category: "programming"}));