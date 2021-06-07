var inputTodo = document.getElementById('input-todo')
var painelTarefas = document.getElementById('painel-tarefas')
var buttonAdicionar = document.querySelector('.adicionar')
var criarList = document.getElementById('lista-tarefas')

buttonAdicionar.addEventListener('click',adicionarTarefa)


function adicionarTarefa(){
    if(inputTodo.value !== ""){
        var criarItem = document.createElement('li')
        var acoes = document.createElement('div')
        acoes.setAttribute('class', 'acoes')
        criarItem.setAttribute('class','lista-item')
        

        criarItem.textContent = inputTodo.value

        criarItem.appendChild(acoes)
        painelTarefas.appendChild(criarList)
        criarList.appendChild(criarItem)

    }
    
    //botao remover
    var botaoRemover = document.createElement('button')
    botaoRemover.setAttribute('href', 'remover')
    botaoRemover.textContent = "Remover"
    acoes.appendChild(botaoRemover)
    botaoRemover.onclick = function(){
        criarItem.removeChild(botaoRemover)
        criarList.removeChild(criarItem)
    }

    //botao Checar
    var botaoChecar = document.createElement('input')
    botaoChecar.setAttribute('type', 'checkbox')
    acoes.appendChild(botaoChecar)
        botaoChecar.onclick = function(){
            if(!botaoChecar.checked){
                criarItem.style.textDecoration = "none"
            } else {
                criarItem.style.textDecoration = "line-through"
            }
    } 

    inputTodo.value = ""

}