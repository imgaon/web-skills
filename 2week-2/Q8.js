// 목적: 주어진 배열에서 중복되는 요소들을 제거한 새로운 배열을 반환하는 함수를 작성
// 주어진 배열에서 중복되는 요소들을 제거한 새로운 배열을 반환하는 removeDuplicates라는 함수를 작성해주세요.

function removeDuplicates(arr) {
    // 코드 작성
    const removeDuplicates = [...new Set(arr)]                                          //set은 중복을 허용하지 않는 객체이기 때문에 중복을 걸러줌
    // return removeDuplicates
    const removeDuplicates2 = arr.filter((item, index) => arr.indexOf(item) === index)  //arr요소들 중 indexOf가 처음 찾은 값만 리턴하고 두번째 찾은 값은 넘어감
    return removeDuplicates2
}

const nums4 = [1, 2, 3, 1, 4, 2, 5];
console.log(removeDuplicates(nums4)); // [1, 2, 3, 4, 5] 출력 
console.log("--------------------------------------")