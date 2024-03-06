let botaoAdd = document.querySelector('.botao-add')
botaoAdd.addEventListener("click",pegarInput)

function pegarInput(){
    let input = document.querySelector('#item').value
    console.log(input)
}