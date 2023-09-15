// 목적: 배열의 누락된 숫자 찾는 함수
// 1부터 N까지의 연속된 숫자가 들어있는 길이 N-1인 배열을 인자로 받아서 누락된 숫자를 찾아 반환하는 함수를 작성하세요.

function findMissingNumber(arr) {
    // 코드 작성
    arr.sort((a, b) => a - b);                                       //먼저 배열을 오름차순으로 정렬
    const missingNumber = [];                                        //누락된 값을 찾아서 넣을 배열 만들기
    for (i = arr[0]; i < arr[arr.length - 1]; i++) {                 //i는 arr의 첫번째 숫자부터 arr의 마지막 숫자 -1까지 1씩 증가
        if (! arr.includes(i)) {                                     // 만약 arr에 i가 포함되어있지 않으면
            missingNumber.push(i)                                    //누락된 함수 배열에 i를 추가
        }
    }
    return missingNumber;                                            //missingNumber를 반환


}
console.log(findMissingNumber([1, 2, 4, 5, 6])); // 3
console.log(findMissingNumber([1, 3, 4, 5])); // 2
console.log(findMissingNumber([5, 1, 3, 2])); // 4 