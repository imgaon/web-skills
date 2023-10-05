// - 목적: 두 날짜 간의 일수 차이를 반환하는 함수
// - 소수점은 버림해서, 정수를 반환하도록 한다.

function daysBetween(date1, date2) {
    const d11 = new Date(date1);
    const d22 = new Date(date2);
    const oneDay = 1000 * 60 * 60 * 24;
    const diff = Math.abs(d11 - d22);
  
    return Math.floor(diff / oneDay);
}
  
const d11 = new Date("2022-09-24 12:30:00")
const d22 = new Date("2022-09-25 17:30:00")
console.log(daysBetween(d11, d22)) // 1





console.log("----------------------------------------------------------")