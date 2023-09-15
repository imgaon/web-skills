// 목적: 배열을 비교하여 공통적으로 포함된 요소를 반환하는 함수
// 두 개의 숫자 배열을 인자로 받아서 두 배열에 공통적으로 포함된 요소를 반환하는 함수를 작성하세요.
// 단 결과로 반환되는 배열에는 중복된 요소 가 없어야 한다.

function commonElements(arr1, arr2) {
    // 코드 작성
    return arr1.filter(element => arr2.includes(element))
}

console.log(commonElements([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])); // [3, 4, 5]
console.log(commonElements([2, 3, 5, 7], [1, 2, 3, 4]));

