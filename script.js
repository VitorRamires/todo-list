var inputTodo = document.getElementById('input-todo')
var painelTarefas = document.getElementById('painel-tarefas')

var buttonAdicionar = document.querySelector('.adicionar')
buttonAdicionar.addEventListener('click',adicionarTarefa)

var criarList = document.getElementById('lista-tarefas')

function adicionarTarefa(){
    if(inputTodo.value !== ""){
        var criarItem = document.createElement('li')
        criarItem.setAttribute('class','lista-item')

        criarItem.textContent = inputTodo.value
        painelTarefas.appendChild(criarList)
        criarList.appendChild(criarItem)
    }
    
    //botao remover
    var botaoRemover = document.createElement('button')
    botaoRemover.setAttribute('href', 'remover')
    botaoRemover.textContent = "Remover"
    criarItem.appendChild(botaoRemover)
    botaoRemover.onclick = function(){
        criarItem.removeChild(botaoRemover)
        criarList.removeChild(criarItem)
    }

    //botao Checar
    var botaoChecar = document.createElement('input')
    botaoChecar.setAttribute('type', 'checkbox')
    criarItem.appendChild(botaoChecar)
        botaoChecar.onclick = function(){
            if(!botaoChecar.checked){
                criarItem.style.textDecoration = "none"
            } else {
                criarItem.style.textDecoration = "line-through"
            }
        } 
}