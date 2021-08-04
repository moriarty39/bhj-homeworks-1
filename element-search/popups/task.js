const close = Array.from(document.querySelectorAll('.modal__close'));
const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const red = document.querySelector('.btn_danger');
const green = document.querySelector('.btn_success');

modalMain.classList.add('modal_active');

close.forEach(element => {
    element.onclick = function (){
        if (element.parentElement.parentElement == modalMain) {
            Xclose();
        } else {
            modalSuccess.classList.remove('modal_active');
            modalMain.classList.remove('modal_active');
        }
    }
});

const Xclose = function(){
    modalMain.classList.remove('modal_active');
    setInterval(()=>{
        modalMain.classList.add('modal_active');
    }, 3000)
}

red.onclick = function(){
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
}
