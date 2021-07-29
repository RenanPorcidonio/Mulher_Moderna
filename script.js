var btnVer = document.querySelector('#btn-ver');
var verMais = document.querySelector('.ver-mais');
var tituloBlusas = document.querySelector('.titulo-categoria');
var maisItens = document.querySelector('mais-itens');

verMais.addEventListener("click", function change() {
    if (!btnVer.checked) {
        verMais.style = "background-color: black; color: white;";
        verMais.innerText = "Ver menos";
        tituloBlusas.style.display = "block";
        maisItens.style.display = "block";   
    }
    else {
        verMais.style = "";
        tituloBlusas.style.display = "none";
        verMais.innerText = "Ver mais";
        maisItens.style.display = "none";
    }
})
