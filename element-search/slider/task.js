'use strict'
const sliderItem = document.querySelectorAll('.slider__item')
let index = 0
document.querySelector('.slider__arrow_next').onclick = (event) => {
    if (index < sliderItem.length - 1) {
        sliderItem.item(index).classList.remove('slider__item_active')
        sliderItem.item(index + 1).classList.add('slider__item_active')

    } else {
        sliderItem.item(index).classList.remove('slider__item_active')
        sliderItem.item(0).classList.add('slider__item_active')
        index = -1
    }
    index++

}

document.querySelector('.slider__arrow_prev').onclick = (event) => {
    if (index > 0) {
        sliderItem.item(index).classList.remove('slider__item_active')
        sliderItem.item(index - 1).classList.add('slider__item_active')

    } else {
        sliderItem.item(index).classList.remove('slider__item_active')
        sliderItem.item(sliderItem.length - 1).classList.add('slider__item_active')
        index = sliderItem.length
    }
    index--

}

