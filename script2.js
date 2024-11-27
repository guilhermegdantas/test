let modal = document.querySelector(".modal")
let botao = document.querySelector(".orcamento")
let btnFechar = document.querySelector(".fecharModal")

botao.addEventListener("click", mostrarModal)
btnFechar.addEventListener("click", esconderModal)

function mostrarModal(){
    modal.style.display = "block"
}

function esconderModal(){
    modal.style.display = "none"
}
