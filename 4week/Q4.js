// 목적: 두 날짜를 비교하여 어느 것이 이전인지 확인하는 함수

function compareDates(date1, date2) {
    const d1 = new Date(date1)
    const d2 = new Date(date2)
    const diff = d1 - d2;
  
    if (diff < 0) return `${`"${date1}"`} 이 더 이전의 날짜입니다.`; // date1 is earlier
    if (diff > 0) return `${`"${date2}"`} 이 더 이전의 날짜입니다.`; // date2 is earlier
    return `두 날짜는 동일합니다.`; // dates are the same day

    // console.log(d1, d2, diff)

}

console.log(compareDates("2023-09-09 11:00:00", "2023-09-09 11:00:00"))




console.log("----------------------------------------------------------")