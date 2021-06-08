var inputTodo = document.getElementById('input-todo')
var painelTarefas = document.getElementById('painel-tarefas')
var buttonAdicionar = document.querySelector('.adicionar')
var criarList = document.getElementById('lista-tarefas')
var itemArray = []
var countAdd = 0
var countCheck = 0
var contagemAdd = document.getElementById('ativas')
var contagemCheck = document.getElementById('completas')

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
        
        itemArray.unshift(inputTodo.value)
        
        countAdd ++
        contagemAdd.textContent = countAdd
        
    } else {
        alert("Adicione uma tarefa")
    }
    
    //botao remover
    var botaoRemover = document.createElement('button')
    botaoRemover.setAttribute('href', 'remover')
    
    acoes.appendChild(botaoRemover)
    botaoRemover.onclick = function(){
        criarItem.removeChild(acoes)
        criarList.removeChild(criarItem)
        countAdd --
        contagemAdd.textContent = countAdd
    }
    
    //botao Checar
    var botaoChecar = document.createElement('input')
    botaoChecar.setAttribute('type', 'checkbox')
    
    acoes.appendChild(botaoChecar)
    botaoChecar.onclick = function(){
        if(!botaoChecar.checked){
                criarItem.style.textDecoration = "none"
                criarItem.style.color = "black"
                countCheck --
                contagemCheck.textContent = countCheck
            } else {
                criarItem.style.textDecoration = "line-through"
                criarItem.style.color = "#adabab"
                countCheck ++
            }
            contagemCheck.textContent = countCheck
    } 

    inputTodo.value = ""
  

}



