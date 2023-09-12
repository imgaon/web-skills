// 목적: 배열에서 특정 요소의 개수를 구하는 함수
// filter 메소드를 사용하여 주어진 배열에서 특정 요소의 개수를 반환하는 함수를 작성하세요.

function countOccurrences(arr, element) {
    // 코드 작성
    const filterArr = arr.filter((filter) => {
        return filter === element;
    })
    return filterArr.length;
    }
    console.log(countOccurrences([1, 2, 3, 2, 4, 2, 5], 2)); // 3
    