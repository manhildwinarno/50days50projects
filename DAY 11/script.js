const insert = document.getElementById('insert')

window.addEventListener('keydown', function(e) {
    insert.innerHTML = `
    <div class="card key">${e.code }</div>
    <div class="card key">${e.key === ' ' ? 'Space' : e.key}</div>
    <div class="card key">${e.keyCode}</div>
    `
})