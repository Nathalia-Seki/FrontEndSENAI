//condicionais

//function seSenao(){
    //se (condição) faça, fimSe ou se (condição) senao
    //se virou if - senao else - {} será o fimSe - sintaxe abaixo
    //true - verdadeiro - no exemplo está: se é verdadeiro, então "estou no If"
    //false - falso - no exemplo se mudar para falso, então "estou no else"
//if(false){
    //    alert("Estou no If")
    //}else{
    //    alert("Estou no Else")
    //}
//}

function seSenao(){
    if(false){
        console.log("Estou no If");
    }else{
        console.log("Estou no Else");
    }

    var idade = Number(prompt("Digite a sua idade:"));
    console.log(idade);

    if(idade >= 18){
        alert("Seja Bem Vindo!");
    }else{
        location.href = "https://google.com.br"
        //Aqui nesse comando está levando o usuário para outro web site - caso digite uma idade infeior a 18 anos
    }
}

//Escolha () caso isso faça isso ou caso isso faça aquilo. 
//switch = escolha / caso = case
//Nesse caso é obrigatório colocar o dois pontos(:) e ponto e vígula é ocional.
//Precisa colocar o começo e o fim de cada caso - ou seja precisa parar a execução do bloco - usa-se o break = esse comando é para quebrar o código, parar uma execução ou para uma function. Caso não coloque então ele vai continuar a executar os outros restantes.
//default = Caso não seja nenhum dos solicitados. Ou seja, quando não é nenhuma das escolhas anteriores, se for outra coisa qualquer digitada é possível imprimir um alerta.

//escolha(var) caso...


function caso(){
    let escolha = prompt("Escolha uma opção de A a D")

    switch(escolha){
        case "A":
            alert("Você escolheu A");
            break
        case "B":
            alert("Você escolheu B");
            break
        case "C":
            alert("Você escolheu C");
            break
        case "D":
            alert("Você escolheu D");
            break
        default:
            alert("O operador é inválido")
    }

}

function teste(){

}