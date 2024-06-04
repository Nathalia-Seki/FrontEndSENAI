var paragrafoPrincipalMetodoAntigo = document.querySelector("#paragrafoPrincipal")

// símbolo de dólar $ seleção do jquery equivale a document.querySelector - seleciona o elemento e também retorna tudo que é possível no elemento

// var pPrincipal = $("#paragrafoPrincipal").text()
// alert(pPrincipal)

// a aplicação .text() = se vaizo: lista o texto dentro do elemento em html. Se preenchido: atualiza o valor na página com o que foi colocado entre parêntenses. Vai imprimir no alert e vai passar a mensagem que está dentro. Também é possível alterar o texto que está na página - exemplo abaixo.

var pPrincipal = $("#paragrafoPrincipal").text("olha que top!")
//alert(pPrincipal)

// algoritmo para imprimir e mudar o "usuário" para o nome que a pessoa colocar.
// Jquery trabalha com visual, logo todo e qualquer erro será ocultado do usuário (Boas práticas)
var nomeUsuário = //prompt("Qual é o seu nome?");

$("#nomeUsuario").text(nomeUsuário)

// evento 
// on - addEventListerner
// Vantagem = Declaramos as 3 etapas de evento simultaneamente (selecionar, adicionar evento e função)
pPrincipal.on("click",function(){
    pPrincipal.addClass("mudei");
})

$("h6").on("click",function(){
    // addClass = adiciona uma classe
    $("main").addClass("tema-escuro");
    // // removeClass = remove classe
    $("main").removeClass("tema-claro");
    // nesse abaixo vai mudar a cor do texto do h3 pela cor vermelha ao clicar em h6 - no usuário. Ou seja, css = adiciona ou atualiza, um atributo no elemento.
    // obs css (atributo, valor)
    $("h3").css("color","red");
})

// PROPAGANDA - efeito de sumir aos poucos até desaparecer quando clicar em fechar "x"
$("#fechar").on("click",function(){
    // efeitos jquery

    // EFEITOS PARA SUMIR
    // fadeOut - vai sumir degradê o que está em parênteses é a velocidade com que vai sumir, quanto menor o número, então mais rápido. 
    // $("#propaganda").fadeOut(500)

    // slideUp = efeito que vai sumir e fecha de baixo pra cima.
    // $("#propaganda").slideUp(500)

    // hide  = vai fazer sumir, mas das extremidades para dentro.
    $("#propaganda").hide(500)

    // EFEITOS PARA APARECER

    // aparece tipo degradê
    // $("#propaganda").fadeIn(500)

    // aparece em slide de cima pra baixo
    //$("#propaganda").slideDown(500)

    // aparece do centro para as extremidades
    $("#propaganda").show(500)




})