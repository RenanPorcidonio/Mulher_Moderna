let btnVer = document.querySelector('#btn-ver')
let verMais = document.querySelector('.ver-mais')
let maisItens = document.querySelector('.mais-itens')
let navBtn = document.querySelectorAll(".navBtn")

function verMaisItens() {
    maisItens.classList.toggle("toggle-show")
}
verMais.addEventListener("click", verMaisItens)
for (let i = 0; i < navBtn.length; i++) {
    navBtn[i].addEventListener("click", verMaisItens)
}