let botaoAdd = document.querySelector('.botao-add')
let lista = document.querySelector('.lista')
let input = document.querySelector('#item')
let botaoSortear = document.querySelector('#btnSortear')
let botaoFechar = document.querySelector('#icon-close')
let modal = document.querySelector('.modal')
let loading = document.querySelector('.circulo-de-carregamento')
let resultado = document.querySelector('.resultado')
let musica = document.querySelector('.musica')
let itensLista = []

botaoSortear.addEventListener("click",sortear)
botaoAdd.addEventListener("click",pegarInput)
botaoFechar.addEventListener("click",fecharModal)

function fecharModal(){
    modal.style.display = 'none'
}


input.addEventListener("keypress", function(event){
    if (event.keyCode == 13){
        pegarInput()
    }
})

function sortear(){
    resultado.innerHTML = ``
    loading.style.display = 'block'
    modal.style.display = 'flex'

    setTimeout(exibirNumero, 1000)
    function exibirNumero(){
        loading.style.display = 'none'
        let texto = 'Tirar a sua roupa e ir de sapacagens';
        resultado.innerHTML = `${texto}`
        musica.volume = 0.2
        musica.play()
    }

}

function deletarItem(index){
    lista.removeChild(itensLista[index]);
    itensLista.splice(index, 1);
}


function pegarInput(){
    let input = document.querySelector('#item').value
    if (input != ''){
        let novoItem = document.createElement('li')
        let spanDelete = document.createElement('span')
        spanDelete.className = 'material-symbols-outlined'
        spanDelete.textContent = 'delete'
    
        novoItem.textContent = input
        novoItem.appendChild(spanDelete)
    
        lista.appendChild(novoItem)
        itensLista.push(novoItem)
        spanDelete.addEventListener('click', function() {
            let index = itensLista.indexOf(novoItem);
            deletarItem(index);
        });

        document.querySelector('#item').value = ``

    }

    
}
