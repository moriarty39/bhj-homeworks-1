const link = Array.from(document.querySelectorAll('.menu__link'))
link.forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        if(element.nextElementSibling){
            element.nextElementSibling.classList.toggle('menu_active');
        } 
    });
});
