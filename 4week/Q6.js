// - 목적: 현재 시간 실시간으로 보여주기
// - setTimeout 혹은 setInterval을 활용해서, 현재 시간을 실시간으로 보여주도록 만든다.
// - 출력 형식은 yyyy-mm-dd hh-mm-ss 이어야 한다.

let time = setInterval(() => {
    document.getElementById('time').textContent = currentTime()
}, 1000)