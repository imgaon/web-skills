// 목적: 배열 내 모든 숫자가 짝수인지 확인하는 함수
// every 메소드를 사용하여 주어진 숫자 배열의 모든 요소가 짝수인지 확인하는 함수를 작성하세요.

function areAllEven(arr) {
    // 코드 작성
    const evenArr = arr.every((element) => {
        return element % 2 === 0;
    })
    return evenArr;
}
console.log(areAllEven([2, 4, 6, 8])); // true
console.log(areAllEven([2, 4, 7, 6, 8])); // false
    