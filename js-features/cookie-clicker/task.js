const cookie = document.getElementById('cookie');

let count = Number(document.getElementById('clicker__counter').innerHTML);
cookie.addEventListener('click' , () => {
document.getElementById('clicker__counter').innerHTML = ++count;
count % 2 == 0 ? cookie.style.width = '200px' : cookie.style.width = '150px'
;
});
