// 목적: 주어진 날짜가 주말인지 확인하는 함수

function isWeekend(date) {

    if (date.getDay() === 0 || date.getDay() === 6) {
        return true
    } else {
        return false
    }
}


const d1 = new Date("2022-09-25 00:00:00")
console.log(isWeekend(d1))

const d2 = new Date("2023-09-25 00:00:00")
console.log(isWeekend(d2))





console.log("----------------------------------------------------------")