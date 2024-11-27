let mod = document.querySelector(".secondModal")
let btn = document.querySelector(".btnSurpresa")

btn.addEventListener("click", mostrarMod)

function mostrarMod(){
    mod.style.display = "block"
    btn.style.display = "none"
}