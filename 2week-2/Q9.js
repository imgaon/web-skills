// 목적: 주어진 이중 배열의 평균값을 반환하는 함수를 작성
// 주어진 이중 배열의 평균값을 구하는 average라는 함수를 작성해주세요

function average(arr) {
    // 코드 작성
    let sumArr = 0
    let divArr = 0
    const allArr = [...nums5[0], ...nums5[1]]           //전개 연산자로 두 배열 합치기
    allArr.forEach((element) => sumArr += element )     //sumArr에 모든 값 더하기
    
    divArr = sumArr / allArr.length
    return divArr
}
const nums5 = [[1, 2, 3, 4, 5], [9, 10, 11, 12, 13]];
console.log(average(nums5)); // 3 출력 // 7 출력
console.log("--------------------------------------")