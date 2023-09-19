// - 목적: 객체에서 특정 키-값 쌍을 삭제하는 함수 작성
// - 해당 키(keys)를 가진 키-값 쌍을 삭제한 새 객체를 반환해주세요.

function removeKeyFromObject(object, keys) {
	// 코드 작성

    for (let i = 0; i < keys.length; i++) {
        delete object[keys[i]]
    }
    return object
}

const obj2 = {a: "hi", b: "there", c: "world"};

console.log(removeKeyFromObject(obj2, ['b', 'c'])); // {a: "hi"} 출력
console.log("----------------------------------------")