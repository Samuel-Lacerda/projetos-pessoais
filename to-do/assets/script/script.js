let botaoAdd = document.querySelector('.botao-add')
let lista = document.querySelector('.lista')
let input = document.querySelector('#item')
let botaoSortear = document.querySelector('#btnSortear')
let botaoFechar = document.querySelector('#icon-close')
let modal = document.querySelector('.modal')
let loading = document.querySelector('.circulo-de-carregamento')
let resultado = document.querySelector('.resultado')
let contador = document.querySelector('.contador-itens-num')
let itensLista = []
let h1roxo = document.querySelector('.h1-roxo')
let h1azul = document.querySelector('.h1-azul')
let c = 0

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
    if(itensLista.length > 1){
        resultado.innerHTML = ``
        loading.style.display = 'block'
        modal.style.display = 'flex'
        h1azul.style.display = 'block'
        h1roxo.style.display = 'block'

        setTimeout(exibirNumero, 1000)
        function exibirNumero(){
            loading.style.display = 'none'
            let n = Math.floor(Math.random() * itensLista.length)
            let texto = '';
        
            for (let node of itensLista[n].childNodes) {
                if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== '') {
                    texto += node.nodeValue.trim() + ' ';
                }
            }
            resultado.innerHTML = `${texto}`
        }
        } else{
            resultado.innerHTML = `Adicione mais de uma opção.`
            loading.style.display = 'none'
            modal.style.display = 'flex'
            h1azul.style.display = 'none'
            h1roxo.style.display = 'none'
    }

}

function deletarItem(index){
    lista.removeChild(itensLista[index]);
    itensLista.splice(index, 1);
    c = itensLista.length
    contador.innerHTML = `${c}`
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
        c = itensLista.length
        contador.innerHTML = `${c}`
        document.querySelector('#item').value = ``

    }

    
}
