let holeNumber = document.querySelectorAll(".hole");
let dead = Number(document.getElementById('dead').innerHTML);
let lost = Number(document.getElementById('lost').innerHTML);

function reset(){
    dead = 0;
    document.getElementById('dead').innerHTML = dead;
    lost = 0;
    document.getElementById('lost').innerHTML = lost;
}

holeNumber.forEach((element)=>{
element.addEventListener('click', ()=>{
    element.classList.contains('hole_has-mole') ? 
    document.getElementById('dead').innerHTML = ++dead : 
    document.getElementById('lost').innerHTML = ++lost;
    if(dead == 10) {
        reset();
        alert('win');

    }if(lost > 4) {
        reset();
        alert('loose');
    }

})
})
