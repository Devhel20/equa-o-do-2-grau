const b = document.getElementById ("ht")

b.addEventListener ("click", funcao)

function funcao () {
    const nav = document.getElementById  ("linkp")
    nav.classList.toggle ('active')
    const nav2 = document.getElementById  ("link2p")
    nav2.classList.toggle ('active')
}
