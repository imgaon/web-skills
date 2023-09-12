// 목적: 모든 요소를 대문자로 변경하는 함수
// map 메소드를 사용하여 문자열 배열의 요소를 모두 대문자로 변경하는 함수를 작성하세요.

function toUpperCaseArray(arr) {
    // 코드 작성
    const upperArr = arr.map((element) => {
        return element.toUpperCase();
    })
    return upperArr;
}
console.log(toUpperCaseArray(["apple", "banana", "cherry"])); // ["APPLE", "BANANA", "CHERRY"]

// 팁
// String의 prototype method toUpperCase 를 사용하면 문자열이 대문자로 변경된다.
// "apple".toUpperCase(); // APPLE