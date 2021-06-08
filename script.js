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
    var labelChecar = document.createElement('label')
    var botaoChecar = document.createElement('input')
    botaoChecar.setAttribute('type', 'checkbox')
    botaoChecar.setAttribute('id', 'check')

    labelChecar.setAttribute('class','check-label')
    labelChecar.setAttribute('for','check')
    
    acoes.appendChild(botaoChecar)
    acoes.appendChild(labelChecar)
  

    botaoChecar.onclick = function(){
        if(!botaoChecar.checked){
            criarItem.style.textDecoration = "none"
            criarItem.style.color = "black"
            countCheck --
            contagemCheck.textContent = countCheck
            labelChecar.style.background = "#ccc"
        } else {
            criarItem.style.textDecoration = "line-through"
                criarItem.style.color = "#adabab"
                labelChecar.style.background = "red"
                countCheck ++
            }
            contagemCheck.textContent = countCheck
    } 

    inputTodo.value = ""
  

}



