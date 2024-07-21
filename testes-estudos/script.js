let texto = document.querySelector('#texto').value
let saida = document.querySelector('#saida')
let btn = document.querySelector('#btn')

btn.addEventListener(click,enviar)
function enviar(){
    saida.innerHTML = `oi`
}