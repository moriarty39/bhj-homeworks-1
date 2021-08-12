const body = document.querySelector('body');
const toolTip = document.querySelector('.tooltip');
const hasToolTip = Array.from(document.querySelectorAll('.has-tooltip'))

function getCoords(elem) {
    let box = elem.getBoundingClientRect();
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  }

function showTooltip(event){
    toolTip.classList.toggle('tooltip_active');
    toolTip.innerText = event.target.title;

    let coords = getCoords(event.target);
    toolTip.style.left = coords.left + "px";
    toolTip.style.top = coords.top + 18 + "px";
    
    event.target.after(toolTip);
}

hasToolTip.forEach(element =>{
    element.addEventListener('click', (event)=>{
        event.preventDefault();
        showTooltip(event)
    })
})
