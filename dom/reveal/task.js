const reveal = Array.from(document.querySelectorAll('.reveal'));

window.addEventListener('scroll', function() {
    reveal.forEach(element =>{
        (element.getBoundingClientRect().top > 0) && (element.getBoundingClientRect().top < window.innerHeight) ?
        element.classList.add('reveal_active'): element.classList.remove('reveal_active');
    })
  });

  
