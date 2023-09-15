// 목적: 문자열 배열을 받아서 새로운 문자열을 반환하는 함수를 작성
// 주어진 문자열 배열의 원소들을 연결하여 새로운 문자열을 반환하는 joinStrings라는 함수를 작성해주세요.

function joinStrings(arr) {
    // 코드 작성
    return arr.join("")             // join을 사용하여 배열안 요소를 문자열로 합칠 수 있음 ()안에 아무것도 쓰지 않으면 ,로 대체됨
}
const words = ['Hello', 'World', '!'];
console.log(joinStrings(words)); // 'HelloWorld!' 출력
console.log("--------------------------------------")