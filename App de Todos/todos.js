// Adicionando a ul a um elemento
var listElement = document.querySelector('#app ul');
// Adicionando o input a um elemento
var inputElement = document.querySelector('#app input');
// Adicionando o botão a um elemento
var buttonElement = document.querySelector('#app button');

// Cria a variavel todos pegando os itens que estão no localStorage em array
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];


// Renderiza os Todos
function renderTodos(){
    // Remove todo o conteúdo que está dentro do listElement
    listElement.innerHTML = '';

    //For para cada elemento dentro da lista de todos
    for (todo of todos) {
        //cria o elemento li
        var todoElement = document.createElement('li');

        //cria o texto e insere um item da lista de todos
        var todoText = document.createTextNode(todo);

        //cria o elemento "a" e adiciona o atributo href ao elemento.
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        //pega a posição do item dentro da lista de todos
        var pos = todos.indexOf(todo);

        //adiciona o attributo de onclick no linkElement e deleta o item utilizando a função deleteTodo
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        //Cria o texto
        var linkText = document.createTextNode('Excluir');

        //Adiciona o texto criado acima ao linkElement
        linkElement.appendChild(linkText);

        //Adiciona o texto que é retirado da lista de todos
        todoElement.appendChild(todoText);

        //Adiciona o link com o texto linkText
        todoElement.appendChild(linkElement);

        //Adiciona a li com o texto e o link dentro da ul
        listElement.appendChild(todoElement);
    }
}
//Executa a função
renderTodos();

//Função que recebe o texto do input e adiciona novo item a lista de todos
function addTodo(){
    //Transforma o texto recebido do input em uma variável
    var todoText = inputElement.value;

    //Adiciona esse texto na lista de todos
    todos.push(todoText);

    //Limpa o input
    inputElement.value = '';

    //Executa a função
    renderTodos();

    //Executa a função
    saveToStorage();
}

//Executa a função addTodo quando o botao é pressionado
buttonElement.onclick = addTodo;

//Função que deleta um item dentro da lista de todos
function deleteTodo(pos){

    // remove o elemento utilizando a posição do item na lista
    todos.splice(pos, 1);

    //Executa a função
    renderTodos();

    //Executa a função
    saveToStorage();
}

//Função que salva o item dentro do local Storage e transforma em string
function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}