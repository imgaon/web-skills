// 목적: 배열에서 최대값 찾는 함수
// 숫자 배열을 인자로 받아서 그 배열의 최대값을 반환하는 함수를 작성하세요

function getMaxNumber(arr) {
    // 코드 작성
    arr.sort((a, b) => b - a);
    return arr[0];
}
console.log(getMaxNumber([1, 7, 3, 5, 10, 4])); // 10
    