// 목적: 주어진 배열의 요소들의 순서를 반대로 바꾼 새로운 배열을 반환하는 함수를 작성
// 주어진 배열의 요소들을 역순으로 정렬한 새로운 배열을 반환하는 reverseArray라는 함수를 작성해주세요.
// Array methods의 reverse를 사용하지 않고 구현하세요.

function reverseArray(arr) {
    // 코드 작성
    // return arr.sort((a, b) => b - a)
    const reverseArr = [];
    for (i = arr.length - 1; i >= 0; i--) {             //i는 arr의 끝 순서부터 0까지 하나씩 감소하며 뒤애서 부터 순환
        reverseArr.push(arr[i])                         //뒤에서 부터 차례대로 새로운 배열에 추가
        // console.log(i, arr[i], reverseArr)
    }
    return reverseArr;
}

const nums3 = [1, 2, 3, 4, 5];
console.log(reverseArray(nums3)); // [5, 4, 3, 2, 1] 출력
console.log("--------------------------------------")