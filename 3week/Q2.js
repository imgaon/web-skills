// 목적: 문자열을 입력으로, 배열로 이루어진 각 문자들이 몇 개씩 포함되어 있는지 계산하는 함수를 작성하세요.

function countLetters(string) {
	// 코드 작성
    let strArr = [...string]

    let countLetters = {};

    strArr.forEach(x => countLetters[x] = (countLetters[x] || 0)+1);
    // console.log(x, countLetters[x], Object.keys(countLetters), Object.values(countLetters))
    // console.log(countLetters)
    return countLetters
}

const str = "apple";

console.log(countLetters(str)); // {a: 1, p: 2, l: 1, e: 1} 출력
console.log("----------------------------------------")