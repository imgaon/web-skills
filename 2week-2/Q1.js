// 목적: 두 개의 배열을 받아서 하나로 합쳐주는 concatArray라는 함수를 작성
// concatArray라는 함수로 인자로 입력된 두 개의 배열(arr1, arr2)을 합쳐, 새로운 배열을 반환해주세요.
// Array methods의 concat은 사용하지 않고 구현하세요.

function concatArray(arr1, arr2) {
    // 코드 작성
    const concatArray = [];                         //새 배열 생성

    arr1.forEach(element => {                       //forEach 반복문으로
        return concatArray.push(element);           //새 배열에 arr1에 있던 값을 추가 및 반환
    });
    arr2.forEach(element => {
        return concatArray.push(element);           //새 배열에 arr2에 있던 값을 추가 및 반환
    })
    return concatArray;                             //cocatArray를 반환

}
const array1 = ['A', 'B', 'C'];
const array2 = ['D', 'E', 'F'];
console.log(concatArray(array1, array2)); // ['A', 'B', 'C', 'D', 'E', 'F'] 출력
console.log("--------------------------------------")
    