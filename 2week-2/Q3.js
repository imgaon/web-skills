// 목적 : 주어진 배열에서 요소를 삭제하려고 한다.
// removeElement라는 함수를 작성하고, 이 함수는 두 개의 인자(arr, index)를 가집니다.
// index 위치의 요소를 제거하고 새로운 배열을 반환해주세요.
console.log("--------------------------------------")
function removeElement(arr, index) {
    //코드 작성
    const remove = [];
    let length = arr.length - 1;
        for (i = 0; i < index; i++) {                           //i는 배열의 첫번째 부터 index값 바로 전 까지 증가함
            remove.push(arr[i]);                                //arr[]안에 i값을 넣어서 새 배열에 추가
        } 
        for (i = index + 1; i <= arr.length - 1; i++) {         //제거할 요소를 건너뛰기 위해 i는 index + 1부터 시작해서 배열 끝까지 증가
            remove.push(arr[i]);                                //새 배열에 값 추가
        } 
        return remove;

}

const chars = ['A', 'B', 'C', 'D', 'E'];

console.log(removeElement(chars, 3)); // ['A', 'B', 'C', 'E'] 출력
console.log("--------------------------------------")