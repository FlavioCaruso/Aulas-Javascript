function checaIdade(idade, delay) {
    return new Promise (function(resolve, reject){
        if(idade >= 18){
             setTimeout(resolve, delay);
        }else{
            setTimeout(reject, delay);
        }
    });
   };
   checaIdade(18, 2000)
    .then(function() {
    console.log("Maior que 18");
    })
    .catch(function() {
    console.log("Menor que 18");
    });
   