// 목적: 주어진 인덱스 듸이어의 요소들을 제외한 새로운 배열을 반환하는 함수를 작성
// excludeElements라는 함수를 작성하세요. 이 함수는 세 개의 인자(arr, start, end)를
// 받아서 start 인덱스부터 end 인덱스까지의 요소를 제외한 새로운 배열을 반환해주세요.
console.log("--------------------------------------")
function excludeElements(arr, start, end) {
    // 코드 작성
    let arr2 = [];
    for (i = 0; i < start; i++) {                   //i는 0번 부터 start값 까지 증가함
        arr2.push(arr[i]);                          //arr[i]는 1, 2를 새 배열에 추가함
    }
    for (i = end+1; i <= arr.length-1; i++) {       //i는 end+1부터 arr의 마지막까지 증가함
        arr2.push(arr[i]);                          //arr[i]는 7을 배열에 추가함
    }
    return arr2;
}

const nums2 = [1, 2, 3, 4, 5, 6, 7];

console.log(excludeElements(nums2, 2, 5)); // [1, 2, 7] 출력
console.log("--------------------------------------")