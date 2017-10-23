// var botao = document.getElementById("btnCadastrar");
// botao.onclick = function(event) {
//     event.preventDefault();
//     alert("mensagem marota");
// };

//a função acima é igual à de baixo:
// $("#btnCadastrar").click(function(event){  //click = função
//     event.preventDefault();
//     alert("mensagem marota");    
// }); 


// como chamar um botão através do id da div

var comecou = false;
var letrasChutadas = [];
var palavra = "";
var erros = 0;
var jogoComecou = false;


$("#cadastro button").click(function (event) {  //click = função
    event.preventDefault();
    //declarar variável palavra com o valor do input
    palavra = $("#palavra").val(); //.val = pega o valor, e por isso é método.
    //verificar se o campo está vazio
    if (palavra === "") {
        //se estiver vazio mostra uma msg de erro
        alert("Por favor preencha o campo!");
    } else {
        //se não estiver vazio montar os underlines
        for (var i = 0; i < palavra.length; i++) {
            var span = $("<span>" + palavra[i] + "</span>");
            span.appendTo(".letras");
        }

        //se não estiver vazio mostrar a tela forca
        //adicionar classe na tela da forca
        $("#forca").addClass("visivel");
        //remover a classe na tela do cadastro
        $("#cadastro").removeClass("visivel");
        comecou = true;
    }
});

$(document).keydown(function (event) {
    if (comecou) {
        var letra = event.key;
        // debugger;
        //validade se é apenas uma letra
        if(letra.length > 1){
            return;
       }

       //vai verificar se a letra já foi utilizada
        if(letrasChutadas.indexOf(letra) != -1){
            return;
        }
        
        //registrar a letra utilizada
        //push = adicionar mais alguma coisa no array
        letrasChutadas.push(letra);
        var span = $("<span>" + letra + "</span>");
        span.appendTo(".letras-usadas");
        //letra existe na palavra cadastrada?
        if(palavra.indexOf(letra) != -1){
            //se sim
                //mostra no campo a letra correspondente
                for (var i = 0; i < palavra.length; i++) {
                    var letra2 = palavra[i];
                    if(letra == letra2){
                        //i é o índice que temos que mostrar na tela
                        $(".letras span").eq(i).addClass("visivel");
                    }
                }
                //se a palavra estiver completa
                    //mostra o final correto

        }else{
            //se não 
                //mostra o membro do boneco
                //se excedeu as tentativas
                    //mostra a familia triste

        }
    }
});