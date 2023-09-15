// 목적: 요소를 추가하려고 제시된 위치에 요소를 추가하는 함수를 작성합니다.
// insertElement라는 함수를 작성하고 이 함수에는 세 개의 인자(arr, index, value)를 전달하고,
// value라는 요소를 index 위치에 삽입한 뒤 새로운 배열을 반환해주세요.
// 현재 배열의 길이보다 긴 index를 넘길 경우, 예외 처리해야 합니다.

function insertElement(arr, index, value) {
    // 코드 작성
    const insert = [];                                                                      // value가 추가 될 새로운 배열을 생성
    let length = arr.length - 1;                                                            // if문에 사용하기 위해 배열의 길이를 담은 변수 선언
    if (length > index) {                                                                   // 배열의 길이가 인덱스보다 클 때만 작동
        for (i = arr[0]; i < arr[index]; i++) {                                             //i는 배열의 첫번째 숫자 부터 배열의 인덱스-1 번째 까지 1씩 증가
            insert.push(i);                                                                 //i값을 새 배열에 추가 //ex) 1,2 배열에 삽입
        } 
        insert.push(value);                                                                 //추가할 value값 삽입
        for (i = arr[index]; i <= arr[arr.length - 1]; i++) {                               //배열의 인덱스번째 부터 배열의 끝까지 1씩 증가
            insert.push(i);                                                                 //i를 배열에 삽입
        } 
        return insert;                                                                      //ex) (nums, 2, 6)일 때 insert 값은 1,2,6,3,4,5가 됨
    }else {                                                                                 //만약 인덱스 값이 배열의 길이보다 크다면
        throw new Error(`현재 배열의 길이는 ${length}로 ${index}는 입력불가능합니다.`);        // 에러메시지를 호출함
        // return console.error(`현재 배열의 길이는 ${length}로 ${index}는 입력불가능합니다.`);
    }
}
const nums = [1, 2, 3, 4, 5];
console.log(insertElement(nums, 2, 6)); // [1, 2, 6, 3, 4, 5] 출력
console.log(insertElement(nums, 10, 6)); // console.error("현재 배열의 길이는 5로 10은 입력불가능합니다.")
console.log("--------------------------------------")
    