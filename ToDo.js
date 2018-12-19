//Referencia dos Elementos do HTML
var baseLista = document.querySelector('#app ul');
var eleInput = document.querySelector('#app input');
var btnEle = document.querySelector('#app button');

var toDos = JSON.parse(localStorage.getItem('lista_todos')) || [];

// Renderiza a Lista de Todos
function renderToDos(){
    baseLista.innerHTML = '';
    for(todo of toDos){
        var itemLista = document.createElement('li');
        var textItem = document.createTextNode(todo);

        var linkEx = document.createElement('a');
        linkEx.setAttribute('href', '#');

        var pos = toDos.indexOf(todo);
        linkEx.setAttribute('onclick', 'destroyToDo(' + pos + ')');

        var exText = document.createTextNode('Excluir');
       
        linkEx.appendChild(exText);

        itemLista.appendChild(textItem);
        itemLista.appendChild(linkEx);
        baseLista.appendChild(itemLista);

        
    }
};

renderToDos();

// Adciona um Todo
function addToDo(){
    var textoTodo = eleInput.value;
    //Coloca um novo elemento no final do array
    toDos.push(textoTodo);
    eleInput.value = '';
    renderToDos();
    salvaStorage()
};

btnEle.onclick = addToDo;

// Exclui um Todo
function destroyToDo(posi){
    //Ele remove a partir da posicao indicada, uma quantidade de itens, se informar 1 qtd ele apenas removera o valor na posicao informada
    toDos.splice(posi, 1);
    renderToDos();
    salvaStorage();
}

// Salvando no LocalStorage o Todo
function salvaStorage(){
    localStorage.setItem('lista_todos', JSON.stringify(toDos));
}