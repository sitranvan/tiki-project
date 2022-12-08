const header = document.querySelector(".header")
const headerSearchPC = document.querySelector(".header-search__input")
const overlayNotHeader = document.querySelector(".overlay-not-header")
const overlayFull = document.querySelector(".overlay-full")
const historyPc = document.querySelector(".history--pc")
const showMoreHisoryPc = historyPc.querySelector(".show-more-history")
const headerSearchMobile = document.querySelector(".header-hide-on__input")
const historyMobile = document.querySelector('.history--mobile-tablet')
const backHistory = document.querySelector(".header-hide-on__back")
const historyMorePcMobile = historyMobile.querySelector(".history-more")
const showMoreHisoryMobile = historyMobile.querySelector(".show-more-history")
const menuBars = document.querySelector(".header-hide-on__bars")
const menuMobile = document.querySelector(".menu-mobile-tablet")
const moreFilter = document.querySelectorAll(".page-filter__action")
const overlay = document.querySelector(".overlay")

function showHistoryPc() {
    headerSearchPC.addEventListener("focus", (e) => {
        historyPc.classList.add("show-on")
        overlayNotHeader.classList.add("show-on")
    })
    overlayNotHeader.addEventListener("click", (e) => {
        historyPc.classList.remove("show-on")
        overlayNotHeader.classList.remove("show-on")
    })


}

showHistoryPc()

function showMoreListHistory(history, showMore) {
    history.addEventListener("click", (e) => {
        showMore.classList.toggle("show-on")
        if (showMore.classList.contains("show-on")) {
            history.firstElementChild.textContent = "Thu gọn"
            history.lastElementChild.classList.add("fa-angle-up")
        } else {
            history.firstElementChild.textContent = "Xem thêm"
            history.lastElementChild.classList.remove("fa-angle-up")
            history.lastElementChild.classList.add("fa-angle-down")
        }
    })
}


showMoreListHistory(historyPc, showMoreHisoryPc)
showMoreListHistory(historyMorePcMobile, showMoreHisoryMobile)

function showHistoryMobile() {
    headerSearchMobile.addEventListener('focus', (e) => {
        historyMobile.classList.add('show-on')
        document.body.style.overflow = 'hidden'
    })
}

backHistory.addEventListener("click", (e) => {
    historyMobile.classList.remove('show-on')
    document.body.style.overflow = 'unset'
})

showHistoryMobile()

menuBars.addEventListener("click", (e) => {
    menuMobile.classList.add("show-on")
    overlayFull.classList.add("show-on")
})

overlayFull.addEventListener("click", (e) => {
    menuMobile.classList.remove("show-on")
    overlayFull.classList.remove("show-on")
})

Array.from(moreFilter).forEach(item => {
    item.addEventListener('click', (e) => {
        const showMore = e.target.previousElementSibling
        if (showMore.classList.contains("show-on")) {
            e.target.querySelector("span").textContent = 'Xem thêm'
            e.target.querySelector("img").src = '../icon-svg/down-curr.svg'
            showMore.classList.remove("show-on")
        } else {
            showMore.classList.add("show-on")
            e.target.querySelector("span").textContent = 'Thu gọn'
            e.target.querySelector("img").src = '../icon-svg/up-blue.svg'
        }
    })
})