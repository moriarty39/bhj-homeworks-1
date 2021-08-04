const left = document.querySelector('.slider__arrow_prev');
const right = document.querySelector('.slider__arrow_next');
const sliders = Array.from(document.querySelectorAll('.slider__item'));
let index = sliders.findIndex(element => {
    return element.classList.contains('slider__item_active');
});
right.addEventListener('click', ()=>{
    sliders[index].classList.remove('slider__item_active');
    (index === sliders.length - 1)?
        (index = 0,
        sliders[index].classList.add('slider__item_active')):
        (sliders[index + 1].classList.add('slider__item_active'));
    index++;
})
left.addEventListener('click', ()=>{
    sliders[index].classList.remove('slider__item_active');
    index--;
    (index === 0)?
        (index = sliders.length - 1,
        sliders[index].classList.add('slider__item_active')):
        (sliders[index].classList.add('slider__item_active'));
})

