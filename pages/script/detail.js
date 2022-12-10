const details = document.querySelector(".details")
const pageProductItems = document.querySelectorAll(".page-product__wrapper")
const similarList = document.querySelector(".similar-list")
const similarNext = document.querySelector(".similar-next")
const similarPrev = document.querySelector(".similar-prev")
const main = document.querySelector(".main")


function renderDetail(img, name, sold, priceProduct, discount) {
    document.title = name
    document.querySelector(".detail-left__img img").src = img
    document.querySelector(".detail-content__name").textContent = name
    document.querySelector(".detail-content__sold").textContent = sold
    document.querySelector(".detail-content__price h2").textContent = priceProduct
    document.querySelector(".detail-content__price p").textContent = discount
    document.querySelector(".detail-content__compare__price").textContent = priceProduct
    document.querySelectorAll(".similar-img__product").forEach(item => item.src = img)
    document.querySelectorAll(".similar-content__price p:first-child").forEach(item => item.textContent = priceProduct)
    document.querySelectorAll(".similar-content__price p:last-child").forEach(item => item.textContent = discount)
    document.querySelectorAll(".similar-content__name h3").forEach(item => item.textContent = name)
    document.querySelectorAll(".similar-content__sold").forEach(item => item.textContent = sold)
    document.querySelectorAll(".details-cate__item")[2].textContent = name
    // document.querySelector(".exzoom_preview_img").src = img
}


Array.from(pageProductItems).forEach(item => {
    item.addEventListener('click', (e) => {
        main.classList.add("hidden")
        details.classList.add("show")

        // get info product card wrapper page
        const img = item.querySelector(".page-product__img").querySelectorAll("img")[0].src
        const name = item.querySelector(".page-product__name").textContent
        const sold = item.querySelector(".page-product__rate").textContent
        const priceProduct = item.querySelector(".page-product__price span:first-child").textContent
        const discount = item.querySelector(".page-product__price span:last-child").textContent

        renderDetail(img, name, sold, priceProduct, discount)

        // similar scroll slider
        const similarWidth = similarList.clientWidth
        let checkScrollSimilar = 0
        similarNext.addEventListener('click', () => {
            checkScrollSimilar++
            if (checkScrollSimilar >= 1) {
                similarNext.style.opacity = 0
                similarNext.style.pointerEvents = 'none'
                similarPrev.style.opacity = 1
                similarPrev.style.pointerEvents = 'unset'
            }
            similarList.scrollLeft += similarWidth
        })

        similarPrev.addEventListener('click', () => {
            checkScrollSimilar--
            if (checkScrollSimilar === 0) {
                similarNext.style.opacity = 1
                similarNext.style.pointerEvents = 'unset'
                similarPrev.style.opacity = 0
                similarPrev.style.pointerEvents = 'none'
            }
            similarList.scrollLeft -= similarWidth

        })

        // show and hidden decs
        const descDetail = document.querySelector(".info-desc p")
        const descDetailBtn = document.querySelector(".info-desc__show")

        descDetailBtn.addEventListener('click', () => {

            if (descDetailBtn.textContent === "Thu gọn") {
                descDetail.classList.remove("more")
                descDetailBtn.textContent = "Xem thêm nội dung"

            } else {
                descDetail.classList.add("more")
                descDetailBtn.textContent = "Thu gọn"
            }
        })

        // check media query mobile and tablet
        const mediaQuery = window.matchMedia('(max-width: 1023px)')
        const detailHeaderMT = document.querySelector(".detail-mt__head")
        const iconArrowDetailMT = document.querySelector('.detail-mt__left')
        const iconCartDetailMT = document.querySelector('.detail-mt__right__icon--cart')
        const iconMoreDetailMT = document.querySelector('.detail-mt__right__icon--more')

        const setColorDetailIcon = (back, cart, more, bg) => {
            iconArrowDetailMT.querySelector('img').src = back
            iconCartDetailMT.querySelector('img').src = cart
            iconMoreDetailMT.querySelector('img').src = more
            if (bg == false) {
                iconArrowDetailMT.style.backgroundColor = 'transparent'
                iconCartDetailMT.style.backgroundColor = 'transparent'
                iconMoreDetailMT.style.backgroundColor = 'transparent'
            } else {
                iconArrowDetailMT.style.backgroundColor = '#24242480'
                iconCartDetailMT.style.backgroundColor = '#24242480'
                iconMoreDetailMT.style.backgroundColor = '#24242480'
            }
        }


        // Check if the media query is true
        if (mediaQuery.matches) {
            // Then trigger hidden header
            document.querySelector('.header').style.display = 'none'

            window.addEventListener('scroll', (e) => {
                const scroll = window.scrollY || document.documentElement.scrollTop
                if (scroll > 0) {
                    detailHeaderMT.style.backgroundColor = "#fff"
                    setColorDetailIcon(
                        '../icon-svg/detail-back-blue.svg',
                        '../icon-svg/detail-cart-blue.svg',
                        '../icon-svg/detail-more-blue.svg', false
                    )
                } else {
                    detailHeaderMT.style.backgroundColor = "transparent"
                    setColorDetailIcon(
                        '../icon-svg/detail-back-white.svg',
                        '../icon-svg/detail-cart-white.svg',
                        '../icon-svg/detail-more-white.svg', true
                    )
                }

            })
        }

        const backMTDetail = document.querySelector(".detail-mt__left")
        backMTDetail.addEventListener('click', () => {
            main.classList.remove("hidden")
            document.title = 'Tiki - Mua hàng online giá rẻ'
            details.classList.remove("show")
            document.querySelector('.header').style.display = 'block'
            document.body.scrollIntoView({ block: "start" });
        })
    })
})
