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
    console.log(dados)
}

btnElement.onclick = function (){
    var usuario = inputElement.value;
    axios.get('https://api.github.com/users/'+ usuario +'/repos')
    .then(function(response) {
        let dados = response.data;
        //Cria a lista para os elementos ja existentes
        for (let dado of dados){
            domElement(dado);
        }
    })
    .catch(function(error){
        console.warn(error)
    });

}