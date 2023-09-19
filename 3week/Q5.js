// - 목적: 객체 배열에서 특정 키의 값들로 구성된 배열 반환하는 함수 작성
// - selectValuesByKey라는 함수 안에 입력된 객체 배열(objectArray), 키(key)를 이용하여, 해당 키의 값들로만 구성된 배열을 반환해주세요.

function selectValuesByKey(objectArray, key) {
	// 코드 작성
    let selectObject = [];

    for (let i = 0; i < objectArray.length; i++) {
        selectObject.push(objectArray[i][key])
        // console.log(objectArray[i], objectArray[i][key])
    }
    return selectObject;
}

const objectArray = [
	{ id: 1, name: "Alice" },
	{ id: 2, name: "Bob" },
	{ id: 3, name: "Cathy" },
];

console.log(selectValuesByKey(objectArray, "name")); // ["Alice", "Bob", "Cathy"] 출력
console.log("----------------------------------------")