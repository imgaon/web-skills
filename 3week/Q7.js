// - 목적: 학생 성적 배열에서 특정 점수 이상인 학생들의 이름 반환하는 함수 작성
// - 학생 성적 배열(students)과 점수를(score)를 이용하여, 점수의 평균이 주어진 값 이상인 학생들의 이름을 배열로 반환해주세요.

function filterByAverageScore(students, score) {
	// 코드 작성
    // students의 i번째에서 score의 평균이 인자 score의 이상이면 students i번째의 name을 임의의 배열에 삽입하고 console log로 출력한다.
    const filterByAverageScore = [];
    const divScore = [];
    let sum = 0;
    let div = 0;

    // 평균 구해서 배열 만들기
    students.forEach((x) => {
        for (let i = 0; i < x.score.length; i++) {
            sum += x.score[i];
        };
        div = sum / x.score.length;
        divScore.push(div);
        sum = 0;
    });

    // 위에서 만든 배열로 score 이상인 학생 찾아 출력하기
    for (let i = 0; i < divScore.length; i++) {
        if (divScore[i] >= score) {
            filterByAverageScore.push(students[i].name);
        }
    };

    return filterByAverageScore;
}

const students2 = [
	{ name: "Alice", score: [90, 60, 70, 100] },
	{ name: "Bob", score: [75, 35, 40, 60] },
	{ name: "Cathy", score: [90, 10, 20, 30] },
	{ name: "David", score: [70, 75, 85, 95] },
];

console.log(filterByAverageScore(students2, 80)); // ["Alice", "David"] 출력
console.log("----------------------------------------")