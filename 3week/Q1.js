// - 목적: 두 개의 객체를 받아서 하나로 합쳐주는 mergeObjects라는 함수를 작성
// - mergeObjects라는 함수로 인자로 입력된 두 개의 객체(obj1, obj2)를 합쳐, 새로운 객체를 반환해주세요.
// - Object.assign, Object spread 연산자, 아마 obj1, obj2 있는거랑 따로 지정해서 사용하지 않기.
// - 만약 두 객체에 동일한 키가 있다면 obj2의 키-값 쌍이 병합된 객체에 사용되어야 합니다.

function mergeObjects(obj1, obj2) {
	// 코드 작성
    // return Object.assign(obj1, obj2)

    // let mergeObjects = {...obj1,...obj2}
    // return mergeObjects

    const mergeObjects = {};
    for (let x in obj1) {
        mergeObjects[x] = obj1[x];
        // console.log(x, mergeObjects[x], obj1[x], mergeObjects)
    }

    for (let y in obj2) {
        mergeObjects[y] = obj2[y];
        // console.log(y, mergeObjects[y], obj2[y], mergeObjects)
    }

    return mergeObjects;
}

const object1 = {a: 'A', b: 'B', c: 'C'};
const object2 = {b: 'X', c: 'Y', d: 'Z'};

console.log(mergeObjects(object1, object2)); // {a: 'A', b: 'X', c: 'Y', d: 'Z'} 출력
console.log("----------------------------------------")