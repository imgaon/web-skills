// - 목적: 객체의 키와 값 배열을 만드는 함수 작성
// - 객체를 입력 받고 [[키 배열], [값 배열]] 형태로 반환해주세요.

function getObjectKeysAndValues(object) {
	// 코드 작성

	
	const keys = [Object.keys(object)]
	// console.log(keys)
	const values = [Object.values(object)]
	// console.log(values)
	
	const keysAndValues = [...keys, ...values];
	return keysAndValues
}

const obj = { a: "A", b: "B", c: "C" };

console.log(getObjectKeysAndValues(obj)); // [['a', 'b', 'c'], ['A', 'B', 'C']] 출력
console.log("----------------------------------------")