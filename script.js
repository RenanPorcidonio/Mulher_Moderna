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

//lógica de geração de cards

//geração de itens para a section-vestidos

const item = document.querySelector(".item")
const sectionVestidos = document.querySelector(".section-vestidos")

const cardsVestido = [
    {
        imagem: "https://th.bing.com/th/id/R.d74e9f12b642d6463645b6ade9f2706d?rik=QvYBfkY5hfhStg&riu=http%3a%2f%2fwww.luxoseluxos.com.br%2fwp-content%2fuploads%2f2014%2f06%2fvestido-azul-10.jpg&ehk=rdwjAFpAg%2bMVSuSniQP%2fvrgivspJOIwxbNDX2Y42Dew%3d&risl=&pid=ImgRaw&r=0",
        nome: "Vestido",
        preco: 69.90,
        especificacao: "Tecido crepe seda",
        corTamanho: "Cor Azul - Tamanho G"
    },
    {
        imagem: "/midia/imagens/vestido_branco2.png",
        nome: "Blusa gravatinha 200",
        preco: 54.90,
        especificacao: "Tecido crepe seda",
        corTamanho: "Cor Azul - Tamanho G"
    },
    {
        imagem: "/midia/imagens/vestido_branco2.png",
        nome: "Blusa gravatinha 300",
        preco: 54.90,
        especificacao: "Tecido crepe seda",
        corTamanho: "Cor Azul - Tamanho G"
    },
    {
        imagem: "https://www.dicasdemulher.com.br/wp-content/uploads/2018/11/vestido-florido-44-730x1095.jpg",
        nome: "Vestido Florido",
        preco: 69.90,
        especificacao: "Tecido Algodão",
        corTamanho: "Cor Rosa - Tamanho G"
    },
]
cardsVestido.map(card => {
    const cardClone = item.cloneNode(true)
    cardClone.querySelector("img").src = card.imagem
    cardClone.querySelector("h3").innerHTML = card.nome
    cardClone.querySelector(".preco").innerHTML = card.preco.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})
    cardClone.querySelector(".especificacao").innerHTML = card.especificacao
    cardClone.querySelector(".cor-tamanho").innerHTML = card.corTamanho
    sectionVestidos.appendChild(cardClone)
})

//geração de itens para a section-saias

const sectionSaias = document.querySelector(".section-saias")

const cardsSaias = [
    {
        imagem: "/midia/imagens/vestido_branco.jpg",
        nome: "Blusa gravatinha 500",
        preco: 54.90,
        especificacao: "Tecido crepe seda",
        corTamanho: "Cor Azul - Tamanho G"
    },
    {
        imagem: "/midia/imagens/vestido_branco.jpg",
        nome: "Blusa gravatinha 600",
        preco: 54.90,
        especificacao: "Tecido crepe seda",
        corTamanho: "Cor Azul - Tamanho G"
    },
    {
        imagem: "/midia/imagens/vestido_branco.jpg",
        nome: "Blusa gravatinha 700",
        preco: 54.90,
        especificacao: "Tecido crepe seda",
        corTamanho: "Cor Azul - Tamanho G"
    },
    {
        imagem: "/midia/imagens/vestido_branco.jpg",
        nome: "Blusa gravatinha 800",
        preco: 54.90,
        especificacao: "Tecido crepe seda",
        corTamanho: "Cor Azul - Tamanho G"
    },
]

cardsSaias.map(card => {
    const cardClone = item.cloneNode(true)
    cardClone.querySelector("img").src = card.imagem
    cardClone.querySelector("h3").innerHTML = card.nome
    cardClone.querySelector(".preco").innerHTML = card.preco
    cardClone.querySelector(".especificacao").innerHTML = card.especificacao
    cardClone.querySelector(".cor-tamanho").innerHTML = card.corTamanho
    sectionSaias.appendChild(cardClone)
})

//geração de itens para a section-blusas

const sectionBlusas = document.querySelector(".section-blusas")

const cardsBlusas = [
    {
        imagem: "/midia/imagens/vestido_branco.jpg",
        nome: "Blusa gravatinha 900",
        preco: 54.90,
        especificacao: "Tecido crepe seda",
        corTamanho: "Cor Azul - Tamanho G"
    },
    {
        imagem: "/midia/imagens/vestido_branco.jpg",
        nome: "Blusa gravatinha 1000",
        preco: 54.90,
        especificacao: "Tecido crepe seda",
        corTamanho: "Cor Azul - Tamanho G"
    },
    {
        imagem: "/midia/imagens/vestido_branco.jpg",
        nome: "Blusa gravatinha 1100",
        preco: 54.90,
        especificacao: "Tecido crepe seda",
        corTamanho: "Cor Azul - Tamanho G"
    },
    {
        imagem: "/midia/imagens/vestido_branco.jpg",
        nome: "Blusa gravatinha 1200",
        preco: 54.90,
        especificacao: "Tecido crepe seda",
        corTamanho: "Cor Azul - Tamanho G"
    },
]

cardsBlusas.map(card => {
    const cardClone = item.cloneNode(true)
    cardClone.querySelector("img").src = card.imagem
    cardClone.querySelector("h3").innerHTML = card.nome
    cardClone.querySelector(".preco").innerHTML = card.preco
    cardClone.querySelector(".especificacao").innerHTML = card.especificacao
    cardClone.querySelector(".cor-tamanho").innerHTML = card.corTamanho
    sectionBlusas.appendChild(cardClone)
})

//geração de itens para a section-casacos

const sectionCasacos = document.querySelector(".section-casacos")

const cardsCasacos = [
    {
        imagem: "/midia/imagens/vestido_branco.jpg",
        nome: "Blusa gravatinha 1300",
        preco: 54.90,
        especificacao: "Tecido crepe seda",
        corTamanho: "Cor Azul - Tamanho G"
    },
    {
        imagem: "/midia/imagens/vestido_branco.jpg",
        nome: "Blusa gravatinha 1400",
        preco: 54.90,
        especificacao: "Tecido crepe seda",
        corTamanho: "Cor Azul - Tamanho G"
    },
    {
        imagem: "/midia/imagens/vestido_branco.jpg",
        nome: "Blusa gravatinha 1500",
        preco: 54.90,
        especificacao: "Tecido crepe seda",
        corTamanho: "Cor Azul - Tamanho G"
    },
    {
        imagem: "/midia/imagens/vestido_branco.jpg",
        nome: "Blusa gravatinha 1600",
        preco: 54.90,
        especificacao: "Tecido crepe seda",
        corTamanho: "Cor Azul - Tamanho G"
    },
]

cardsCasacos.map(card => {
    const cardClone = item.cloneNode(true)
    cardClone.querySelector("img").src = card.imagem
    cardClone.querySelector("h3").innerHTML = card.nome
    cardClone.querySelector(".preco").innerHTML = card.preco
    cardClone.querySelector(".especificacao").innerHTML = card.especificacao
    cardClone.querySelector(".cor-tamanho").innerHTML = card.corTamanho
    sectionCasacos.appendChild(cardClone)
})