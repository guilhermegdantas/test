let mod = document.querySelector(".secondModal")
let btn = document.querySelector(".btnSurpresa")

btn.addEventListener("click", mostreMod)

function mostreMod(){
    mod.style.display = "block"
    btn.style.display = "none"
}

