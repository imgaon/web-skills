// 목적 : 주어진 배열에서 요소를 삭제하려고 한다.
// removeElement라는 함수를 작성하고, 이 함수는 두 개의 인자(arr, character)를 가집니다. character 의 요소를 제거하고 새로운 배열을 반환해주세요.
// character에 해당하는 요소가 여러 개인 경우, 모두 제거해야 합니다.
// character에 해당하는 요소가 없는 경우, 없다고 출력합니다.

function removeElement(arr, character) {
    // 코드 작성
    let removeElement = [];
    let findChars = [];

    //character의 인덱스 값 구하기
    let al = arr.length - 1
    for (i = 0; i <= al; i++) {                                     //배열 안에 character가 있는지 확인
        if (arr[i] == character) {
            findChars.push(i)
        }
    }

    //배열만들기
    let fcl = findChars.length
    if (fcl !== 0) {                                                //fcl이 0이 아니라면 실행
        removeElement = arr.filter(element => {                     //removeElement에 arr 요소와 character가 같지 않은 것만 추가
            return element !== character;
        })
        return(removeElement)
    } else {                                                        //0이면 배열에 character 값이 존재하지 않으니 에러 호출
        throw new Error(`배열에 ${character}가 없습니다.`)
    }
}


const chars2 = ['A', 'B', 'B', 'C', 'D', 'E'];

console.log(removeElement(chars2, 'B')); // ['A', 'C', 'D', 'E'] 출력
console.log(removeElement(chars2, 'D')); // ['A', 'B', 'B', 'C', 'E'] 출력
console.log(removeElement(chars2, 'Z')); // console.error("배열에 Z가 없습니다.");

    