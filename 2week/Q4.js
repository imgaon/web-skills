// 목적: 짝수인지 확인하는 함수
// 숫자를 인자로 받아서 짝수인지 확인하여 true 또는 false를 반환하는 함수를 작성하세요.

function isEven(num) {
    // 코드 작성
    if (num % 2 === 0) {
        num = true;
    }else {
        num = false;
    }
    return num;
}
console.log(isEven(2)); // true
console.log(isEven(3)); // false
    