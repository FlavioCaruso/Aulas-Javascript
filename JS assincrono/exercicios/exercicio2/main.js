var inputElement = document.querySelector('input[name=user]');
var btnElement = document.querySelector('button[name=botao]');
var containerElement = document.querySelector('ul[class=lista]');

var domElement = function(dados){
    // cria o elemento li dentro da variavel listaNome
    var listaNome = document.createElement('li');
    // cria o texto dentro da li e recebe lista X deve ser inserido a lista que já existe ou o nome que acabou de ser inserido
    var textElement = document.createTextNode(dados.name);

    // Insere a li dentro da ul
    containerElement.appendChild(listaNome);

    // Insere o texto com a lista dentro da li
    listaNome.appendChild(textElement);
}

btnElement.onclick = function (){
    var listaNome = document.createElement('li');
    var carregando = function(){
        var textElement = document.createTextNode("Carregando...");
        containerElement.appendChild(listaNome);
        listaNome.appendChild(textElement);
    }

            
  
    var usuario = inputElement.value;
    console.log(usuario)
    carregando();
    axios.get("https://api.github.com/users/" + usuario + "/repos")
    .then(function(response) {
        let dados = response.data;
        containerElement.removeChild(listaNome);
        for (let data of dados){
            domElement(data);
        }
    })
    .catch(function(error){
        if(error.response.status === 404){
            alert("Usuário não encontrado");
            inputElement.value = '';
        }
    });
}