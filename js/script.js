var comecou = false;
var letrasChutadas = [];
var palavra = "";
var erro = 0;

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
            //cria um span para cada letra
            var span = $("<span>" + palavra[i] + "</span>");
            span.appendTo(".letras");
        }

        //se não estiver vazio mostrar a tela forca
        //adicionar classe na tela da forca
        $("#forca").addClass("visivel");
        //remover a classe na tela do cadastro
        $("#cadastro").removeClass("visivel");
        //bug fix
        comecou = true;
    }
});

$(document).keydown(function (event) {
    if (comecou) {
        var letra = event.key; //pega o valor da letra
        // debugger;
        //validade se é apenas uma letra
        if (letra.length > 1) {  //qualquer caractere lenght=1, outros > 1
            return;
        }

        //vai verificar se a letra já foi utilizada
        if (letrasChutadas.indexOf(letra) != -1) {
            return; //se a letra que eu chutei existe na array, o código pára
        }

        //registrar a letra utilizada
        //push = adicionar mais alguma coisa no array
        letrasChutadas.push(letra);
        var span = $("<span>" + letra + "</span>");
        span.appendTo(".letras-usadas");
        //letra existe na palavra cadastrada?
        if (palavra.indexOf(letra) != -1) {
            //se sim
            //mostra no campo a letra correspondente
            for (var i = 0; i < palavra.length; i++) {
                var letra2 = palavra[i];
                if (letra == letra2) {
                    //i é o índice que temos que mostrar na tela
                    $(".letras span").eq(i).addClass("visivel");
                }
            }
            //se a palavra estiver completa
            if ($(".letras span:not(.visivel)").length == 0) {
                //mostra o final correto
                $("#ganhou").addClass("visivel");
                $("#forca").removeClass("visivel");
            }

        } else {
            //se não
            if (erro < 6) {
                //mostra o membro do boneco
                $(".corpo .st0").eq(erro).attr("class", "st0 visivel"); //* = coringa; poderia substituir o .st0;
                erro++;
            } else {
                //se excedeu as tentativas
                //mostra a familia triste
                $("#perdeu").addClass("visivel");
                $("#forca").removeClass("visivel");
            }

        }
    }
        
});


$(".btn-recomecar").click(function (event) {
event.preventDefault();
    $(".letras").html(null);
    $(".letras-usadas").html(null);
    $("#palavra").val(null);
    $(".corpo .st0").attr("class", "st0");

    comecou = false;
    letrasChutadas = [];
    palavra = "";
    erro = 0;

    $(".tela").removeClass("visivel");
    $("#cadastro").addClass("visivel");

});