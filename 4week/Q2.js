//- 목적: 주어진 날짜에 일수를 더하는 함수

function addDays(date, days) {
    const newDate = new Date(date)

    newDate.setDate(newDate.getDate() + days)

    const yy = newDate.getFullYear();
    const mm = newDate.getMonth() + 1;
    const dd = newDate.getDate();
    const h = newDate.getHours();
    const m = newDate.getMinutes();
    const s = newDate.getSeconds();

    const yyy = yy.toString().padStart(2, "0")
    const mmm = mm.toString().padStart(2, "0")
    const ddd = dd.toString().padStart(2, "0")
    const hou = h.toString().padStart(2, "0")
    const min = m.toString().padStart(2, "0")
    const sec = s.toString().padStart(2, "0")


    return `${yyy}-${mmm}-${ddd} ${hou}:${min}:${sec}`
}

const d = new Date("2022-09-24 00:00:00")
console.log(addDays(d, 1))








console.log("----------------------------------------------------------")