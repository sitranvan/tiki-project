const formQuanlity = document.querySelector(".detail-content__quanlity input") || document.head
const formDecrease = document.querySelector(".detail-content__quanlity__decrease") || document.head
const formIncrease = document.querySelector(".detail-content__quanlity__increase") || document.head
let formQuanlityValue = formQuanlity.value

formQuanlity.addEventListener("input", (e) => {
    formQuanlityValue = e.target.value
})

formIncrease.addEventListener("click", () => {
    formDecrease.classList.remove("disable")
    formQuanlityValue++
    formQuanlity.value = formQuanlityValue
})

formDecrease.addEventListener("click", () => {
    formQuanlityValue--
    if (formQuanlityValue <= 1) {
        formDecrease.classList.add("disable")
    }
    formQuanlity.value = formQuanlityValue

})
// check all form empty
function checkFormEmpty(input) {
    input.addEventListener("input", (e) => {
        const value = e.target.value
        if (value.trim() !== "") {
            input.parentElement.classList.add("active")
        } else {
            input.parentElement.classList.remove("active")

        }
    })
}

const formSubmit = document.querySelector(".form-submit")
const inputFormMT = document.querySelector(".form-mobile-tablet__input input")
const inputPhoneLogin = document.querySelector(".form-input input")
const inputEmailLogin = document.querySelector(".form-email__email input")
const inputPasswordLogin = document.querySelector(".form-email__password input")
const inputPhoneRegister = document.querySelector(".form-input--register input")

checkFormEmpty(inputPhoneLogin)
checkFormEmpty(inputEmailLogin)
checkFormEmpty(inputPasswordLogin)
checkFormEmpty(inputFormMT)
checkFormEmpty(inputPhoneRegister)

function validateForm(input, regexFirst, regexSecond) {
    input.addEventListener("input", function (e) {
        const value = e.target.value
        const regex = /^\d{10}$/
        if (value === '') {
            this.parentElement.classList.add("error")
        } else if (!regexFirst.test(value)) {
            this.parentElement.classList.add("error")
        } else {
            this.parentElement.classList.remove("error")
        }
    })
}

validateForm(inputPhoneLogin, /^\d{10}$/)
validateForm(inputEmailLogin, /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
validateForm(inputPasswordLogin, /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
validateForm(inputPhoneRegister, /^\d{10}$/)


// validate form mobile, tablet
inputFormMT.addEventListener("input", function (e) {
    const value = e.target.value
    const regexPhone = /^\d{10}$/
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (inputFormMT.type === 'text') {
        if (value === '') {
            this.parentElement.classList.add("error")
        } else if (!regexPhone.test(value)) {
            this.parentElement.classList.add("error")
        } else {
            this.parentElement.classList.remove("error")
        }
    } else if (inputFormMT.type === 'email') {
        if (value === '') {
            this.parentElement.classList.add("error")
        } else if (!regexEmail.test(value)) {
            this.parentElement.classList.add("error")
        } else {
            this.parentElement.classList.remove("error")
        }
    }
})
formSubmit.addEventListener("click", (e) => {
    e.preventDefault()
})