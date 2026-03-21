const button = document.querySelector('.button')
const cards = document.querySelectorAll('.card')

button.addEventListener('click', function() {
    cards.forEach(card => {
        card.innerHTML = `
            <p>Pizza</p>
        `
    });    
})