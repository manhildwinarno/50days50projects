const buttons = document.querySelectorAll('.circle')

buttons.forEach(button => {
    button.addEventListener('click', function() {
        button.parentNode.classList.toggle('active')
    })
})