let currentTimer = Number(document.getElementById('timer').innerHTML);
let timerId = setInterval(()=> {
    document.getElementById('timer').innerHTML = --currentTimer;
    if (currentTimer == 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(timerId);
    }
}, 1000);
