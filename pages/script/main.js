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
const moreFilter = document.querySelectorAll(".page-filter__action")
const overlayMobile = document.querySelector(".overlay-menu__mobile")
const menuMobileWrapper = document.querySelector(".menu-mobile__wrapper")
const menuMobileTablet = document.querySelector(".menu-mobile-tablet")
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


//* Menu mobile tablet
menuBars.addEventListener("click", (e) => {
    console.log(menuMobileTablet)
    menuMobileTablet.classList.add("show-on")
    overlayMobile.classList.add('show-on')
    menuMobileWrapper.classList.add("show-on")
})
//* Click overlay close
overlayMobile.addEventListener("click", (e) => {
    menuMobileTablet.classList.remove("show-on")
    overlayMobile.classList.remove('show-on')
    menuMobileWrapper.classList.remove("show-on")
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

const formLogin = document.querySelector(".form--login")
const formEmail = document.querySelector(".form-email")
const formRegister = document.querySelector(".form--register")
const switchEmail = document.querySelector(".form-switch")
const loginBtn = document.querySelector(".header-reglog h5")
const registerBtn = document.querySelector(".header-reglog h6")
const accountBtn = document.querySelector(".header-account")
const cartBtn = document.querySelector(".header-cart")
const backLoginBtn = document.querySelector(".form-email__back")
const cardMobileTablet = document.querySelector(".header-mobile-tablet__cart")
const formClosePc = document.querySelectorAll(".form-close")
const cartMTSearch = document.querySelector(".header-hide-on__cart")
const formMobileTablet = document.querySelector(".form-mobile-tablet")
const backFormMobileTablet = document.querySelector(".form-mobile-tablet__back")
const menuHeadMobileTablet = document.querySelector(".menu-head")
const menuAccountItem = document.querySelector(".menu-item--account")
const menuCategoryItem = document.querySelector(".menu-item--category")
const switchHideShow = document.querySelector(".form-email__password span")
const formInputPassword = document.querySelector(".form-email__password input")

//* Form login 
loginBtn.addEventListener("click", (e) => {
    formLogin.classList.add("show-on")
    overlayFull.classList.add("show-on")
})
switchEmail.addEventListener("click", (e) => {
    formLogin.classList.remove("show-on")
    formEmail.classList.add("show-on")
})
backLoginBtn.addEventListener("click", (e) => {
    formEmail.classList.remove("show-on")
    formLogin.classList.add("show-on")
})
//* Form register
registerBtn.addEventListener("click", (e) => {
    formRegister.classList.add("show-on")
    overlayFull.classList.add("show-on")
})
accountBtn.addEventListener("click", (e) => loginBtn.click())
cartBtn.addEventListener("click", (e) => loginBtn.click())
cartMTSearch.addEventListener("click", (e) => {
    menuAccountItem.click()
})

cardMobileTablet.addEventListener("click", (e) => menuAccountItem.click())
formClosePc.forEach(item => item.addEventListener("click", () => overlayFull.click()))

//* Check form input

//* Click overlay close
overlayFull.addEventListener("click", (e) => {
    formLogin.classList.remove("show-on")
    formEmail.classList.remove("show-on")
    formRegister.classList.remove("show-on")
    overlayFull.classList.remove("show-on")
})

switchHideShow.addEventListener("click", (e) => {
    if (formInputPassword.type === "password") {
        formInputPassword.type = "text"
    } else if (formInputPassword.type === "text") {
        formInputPassword.type = "password"
    }
})


backFormMobileTablet.addEventListener("click", (e) => {
    formMobileTablet.classList.remove("show-on")
    menuCategoryItem.classList.remove("show-on")
})

//* Menu head
menuHeadMobileTablet.addEventListener("click", (e) => {
    formMobileTablet.classList.add("show-on")
})
//* Swich form phone and email mobile tablet
const switchEmailMobileTablet = document.querySelector(".form-mobile-tablet__switch")
const formTitleEmailMobileTablet = formMobileTablet.querySelector("h5")
const formInputMobileTablet = formMobileTablet.querySelector("input")
const menuHomeItem = document.querySelector(".menu-item--home")
const menuListCategory = document.querySelector(".list-category-mobile-tablet")
const closeCatePage = document.querySelector(".list-category-mobile-tablet--page__close")

menuAccountItem.addEventListener("click", function (e) {
    formMobileTablet.classList.add("show-on")
    switchEmailMobileTablet.addEventListener("click", (e) => {
        if (switchEmailMobileTablet.textContent === "Đăng nhập bằng email") {
            formTitleEmailMobileTablet.textContent = "Nhập email của bạn để tiếp tục"
            formInputMobileTablet.type = "email"
            formInputMobileTablet.placeholder = "abc@gmail.com"
            switchEmailMobileTablet.textContent = "Đăng nhập bằng số điện thoại"
            formInputMobileTablet.value = ""
        }
        else if (switchEmailMobileTablet.textContent === "Đăng nhập bằng số điện thoại") {
            formTitleEmailMobileTablet.textContent = "Đăng nhập hoặc tạo tài khoản"
            formInputMobileTablet.type = "phone"
            formInputMobileTablet.placeholder = "Số điện thoại"
            switchEmailMobileTablet.textContent = "Đăng nhập bằng email"
            formInputMobileTablet.value = ""
        }
    })
})
function removeMenu() {
    menuListCategory.classList.remove("show-on")
    menuMobileTablet.classList.remove("show-on")
    menuMobileWrapper.classList.remove("show-on")
}

//* List category
menuCategoryItem.addEventListener("click", (e) => {
    removeMenu()
    menuListCategory.classList.add("show-on")

})
closeCatePage.addEventListener('click', (e) => {
    removeMenu()

})
//* Home
menuHomeItem.addEventListener("click", (e) => {
    removeMenu()
})


function backToHome() {
    const headerLogo = document.querySelector(".header-logo")
    const link = document.createElement("a")
    link.href = "../index.html"
    const img = document.createElement('img')
    img.src = "../image/logo/tiki-logo.png"
    img.className = "header-logo"
    img.alt = "logo"
    headerLogo.parentNode.replaceChild(link, headerLogo)
    link.appendChild(img)
}
backToHome()
const navHomeLink = document.querySelector(".nav-content > a")
const pageFilterListOne = document.querySelectorAll(".page-filter")[0] || document.head
const pageFilterItems = pageFilterListOne.querySelectorAll(".page-filter__item a")

Array.from(pageFilterItems).forEach(item => {
    switch (navHomeLink.innerText) {
        case "Bách Hóa Online":
            item.href = "convenient-store.html"
            break
        case "Nhà Cửa Đời Sống":
            item.href = "house.html"
            break;
        case "Điện Tử - Điện Lạnh":
            item.href = "electronic.html"
            break
        case "Thiết Bị Số - Phụ Kiện":
            item.href = "digital-device.html"
            break
        case "Điện Thoại - Máy Tính Bảng":
            item.href = "phone.html"
            break
        case "Laptop - Vi Tính - Phụ Kiện":
            item.href = "laptop.html"
            break
        case "Làm Đẹp - Sức Khỏe":
            item.href = "beautify.html"
            break
        case "Điện Gia Dụng":
            item.href = "appliances.html"
            break
        case "Thời trang nam":
            item.href = "men-fashion.html"
            break
        case "Thời trang nữ":
            item.href = "women-fashion.html"
            break;
        case "Giày - Dép nữ":
            item.href = "women-shoes.html"
            break
        case "Giày - Dép nam":
            item.href = "men-shoes.html"
            break
        case "Balo và Vali":
            item.href = "balo-vali.html"
            break
        case "Đồng hồ và Trang sức":
            item.href = "watch.html"
            break;
        case "Ô tô - Xe máy - Xe đạp":
            item.href = "vehicle.html"
            break;
        case "Nhà sách Tiki":
            item.href = "books.html"
            break;
        default:
            break
    }
})