var botao = document.getElementById('show')
var menu = document.getElementById('menu')

function abrirMenu() {
    menu.classList.toggle('active')
}

function mudarTamanho() {
    if (window.innerWidth >= 1200) {
        menu.style.visibility = 'visible'
    }
}