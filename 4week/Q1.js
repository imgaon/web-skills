// - 목적: 현재 날짜와 시간을 반환하는 함수
// - 출력 형식은 yyyy-mm-dd hh-mm-ss 이어야 한다.

function currentTime() {
    const newDate = new Date;

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

console.log(currentTime());









console.log("----------------------------------------------------------")