const tabNav = document.querySelector('.tab__navigation');
const listTab = [...document.querySelectorAll('.tab')];
const tabContent = document.querySelectorAll('.tab__content');

const newTab = (event) => {
    const target = event.target;
    if(!target.classList.contains('tab')) {
        return
    }
    const numberTab = listTab.indexOf(target);
    document.querySelector('.tab__content_active').classList.remove('tab__content_active');
    document.querySelector('.tab_active').classList.remove('tab_active');
    target.classList.add('tab_active');
    tabContent[numberTab].classList.add('tab__content_active');
}
tabNav.addEventListener('click', newTab);
