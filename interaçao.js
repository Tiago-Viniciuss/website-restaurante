var botao = document.getElementById('show')
var menu = document.getElementById('menu')

botao.addEventListener('click', function() {

    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }

}
)

function mudarTamanho() {
    if (window.innerWidth >= 1200) {
        menu.style.display = "block"
    } else {
        menu.style.display = "none"
    }
}