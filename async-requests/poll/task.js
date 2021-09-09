let pollName = document.getElementById('poll__title')
let pollReply = document.getElementById('poll__answers')
let string = ''
let request = new XMLHttpRequest()

request.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php')
request.addEventListener('readystatechange', function () {
    if (this.readyState == request.DONE && this.status == 200) {

        let text = JSON.parse(this.responseText)
        pollName.insertAdjacentText("afterbegin", text.data.title)
        for (let i = 0; i < text.data.answers.length; i++) {
            string += `<button class='poll__answer'>${text.data.answers[i]}</btn>`
        }
        pollReply.insertAdjacentHTML("afterbegin", string)
    }

    let buttonAnswer = document.querySelectorAll('.poll__answer')
    buttonAnswer.forEach(arr => {
        arr.onclick= function () {
            alert('Спасибо, ваш голос засчитан!')
        }
    })

})
request.send()
