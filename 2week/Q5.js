// 목적: 짝수 요소만 반환하는 함수
// 숫자 배열을 인자로 받아서 짝수만 포함하는 새 배열을 반환하는 함수를 작성하세요.

function getEvenNumbers(arr) {
    // 코드 작성
    const evenArr = arr.filter((element) => {
        return element % 2 === 0;
    })
    arr = evenArr;
    return arr;
}
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
    