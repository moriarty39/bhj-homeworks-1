const dropdownValue = document.querySelector('.dropdown__value');
const dropdownItems = Array.from(document.querySelectorAll('.dropdown__item'));
const dropdown = document.querySelector('.dropdown');

dropdown.addEventListener('click', (event)=>{
    dropdownValue.textContent = event.target.textContent;
    event.preventDefault();
    dropdown.lastElementChild.classList.toggle('dropdown__list_active');
})

