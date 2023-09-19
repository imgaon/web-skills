// - 목적: 학생 성적 배열에서 특정 점수 이상인 학생들의 이름 반환하는 함수 작성
// - 학생 성적 배열(students)과 점수(score)를 이용하여, 점수가 주어진 값 이상인 학생들의 이름을 배열로 반환해주세요.

function filterByScore(students, score) {
	// 코드 작성

    //for문과 if문으로 배열 students 안에서 score가 인자 score 이상인 객체의 name을 새 배열에 삽입하여 출력한다.
    let filterScore = []

    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= score) {
            filterScore.push(students[i].name)
        }
    }
    return filterScore;
}

const students = [
	{ name: "Alice", score: 85 },
	{ name: "Bob", score: 75 },
	{ name: "Cathy", score: 90 },
	{ name: "David", score: 65 },
];

console.log(filterByScore(students, 80)); // ["Alice", "Cathy"] 출력
console.log("----------------------------------------")