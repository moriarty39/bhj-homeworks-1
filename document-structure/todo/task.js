const taskAdd = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');
const taskInput = document.getElementById('task__input');

taskAdd.addEventListener('click', (event)=>{
    event.preventDefault();
    if(taskInput.value !== ''){
        tasksList.innerHTML += 
        `<div class="task">
            <div class="task__title">
                ${taskInput.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>`
    
        taskInput.value = '';
    
        const task = Array.from(document.querySelectorAll('.task'));
        const close = Array.from(document.querySelectorAll('.task__remove'));
    
        task.forEach((element, index) =>{
            localStorage.setItem(index, element.innerText);
        })
    
        close.forEach(element => {
            element.addEventListener('click', (event)=> {
                event.target.parentElement.remove();
                localStorage.removeItem(event);
            })
        })
    }
    
})
