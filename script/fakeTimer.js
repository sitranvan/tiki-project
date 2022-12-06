const THREE_HOURS = 10800000
const timer = document.querySelectorAll(".discount-head__timer span")
const hours = timer[0]
const minutes = timer[1]
const seconds = timer[2]


function countdownTimeStart() {

    const countDownDate = new Date().getTime() + THREE_HOURS


    const setTimer = setInterval(function () {
        const now = new Date().getTime();
        const timeRemaining = countDownDate - now;

        const hoursText = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesText = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const secondsText = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        hours.textContent = `0${hoursText}`.slice(-2)
        minutes.textContent = `0${minutesText}`.slice(-2)
        seconds.textContent = `0${secondsText}`.slice(-2)

        if (timeRemaining < 0) {
            clearInterval(setTimer);
            hours.textContent = '00'
            minutes.textContent = '00'
            seconds.textContent = '00'
            checkTimer = true
        }
    }, 1000);
}
countdownTimeStart()

alert("❤❤❤  Thông tin đề tài ở cuối trang  ✔✔✔✔")
console.log("Bản quyền thuộc về tiki.vn...")
console.log("Clone web Trần Văn Sĩ")