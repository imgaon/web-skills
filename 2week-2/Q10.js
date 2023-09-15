// 목적: 주어진 배열에서 가장 긴 문자열을 찾는 함수를 작성
// 주어진 배열에서 가장 긴 문자열을 찾아 반환하는 getLongestString이라는 함수를 작성해주세요.

function getLongestString(arr) {
    // 코드 작성
    let stringArr = arr.map(element => element.length);         //가장 긴 문자열을 찾기위해 새 배열을 생성하여 arr안에 있는 요소들을 문자열 길이로 변환
    // console.log(stringArr)                                   //5, 6, 6, 4, 5 출력

    let maxNum = Math.max(...stringArr);                        //가장 긴 문자열을 찾기위해 Math.max를 사용하여 가장 긴 수를 찾음
    // console.log(maxNum)                                      //6 출력

    let where = stringArr.indexOf(maxNum);                      //최대값이 몇번째에 있는지 찾기 위해 indexOf안에 maxNum을 넣어 인덱스 번호를 찾음
    // console.log(where)                                       //1출력 ( 가장 처음 발견하는 값을 찾기 때문에 1, 2 중에 1을 출력함 )

    return arr[where];                                          //배열의 인댁스 값을 arr[]에 넣어서 banana를 출력
}
const strings = ['apple', 'banana', 'orange', 'kiwi', 'grape'];
console.log(getLongestString(strings)); // 'banana' 출력