var inputTodo = document.getElementById('input-todo')
var painelTarefas = document.getElementById('painel-tarefas')
var buttonAdicionar = document.querySelector('.adicionar')
var criarList = document.getElementById('lista-tarefas')
var countAdd = 0
var countCheck = 0
var contagemAdd = document.getElementById('ativas')
var contagemCheck = document.getElementById('completas')

buttonAdicionar.addEventListener('click',adicionarTarefa)


function adicionarTarefa(){
    
    if(inputTodo.value !== ""){

        //buttons 
        var acoes = document.createElement('div')
        acoes.setAttribute('class', 'acoes')

        // item list
        var criarItem = document.createElement('li')
        
        //appear elements
        criarItem.textContent += inputTodo.value
        criarItem.appendChild(acoes)
        painelTarefas.appendChild(criarList)
        criarList.appendChild(criarItem)

        setTimeout(function(){
            criarItem.setAttribute('class','lista-item')
        }, 200)
        
        atualizarContagem()
        
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
        atualizarContagem()
    }
    
    //botao Checar
    var botaoChecar = document.createElement('input')
    botaoChecar.setAttribute('type', 'checkbox')
   
    acoes.appendChild(botaoChecar)
    botaoChecar.onclick = function(){
            if(!botaoChecar.checked){
                criarItem.classList.remove("checado")
            } else {
                criarItem.classList.add("checado")
            }  
            atualizarContagem()
        } 
        inputTodo.value = "" 
    }


    function atualizarContagem(){
        contagemAdd.textContent = document.querySelectorAll('li:not(.checado)').length
        contagemCheck.textContent = document.querySelectorAll('li.checado').length
    }
