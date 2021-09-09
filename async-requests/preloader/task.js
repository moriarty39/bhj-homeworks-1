'use strict'

let items = document.getElementById('items')
let string

let request = new XMLHttpRequest
request.open('GET', 'https://netology-slow-rest.herokuapp.com')
request.addEventListener('readystatechange', function () {
    if (this.readyState == request.DONE && this.status == 200) {
        let data = JSON.parse(this.responseText)['response']['Valute']
        const loader = document.getElementById('loader')
        loader.classList.remove('loader_active')
        for (let key in data) {
            string = `<div class="item">
            <div class="item__code">${data[key].CharCode}</div><div class="item__value">${data[key].Value}</div><div class="item__currency">руб.</div></div>`
            items.insertAdjacentHTML("beforeend", string)
          
        }
    }
})
request.send()
