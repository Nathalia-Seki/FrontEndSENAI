// escreval()
//console.log = retorna valores no terminal/console.
console.log("Olá mundo!");

// caixas de texto
//Imprime um alerta na página - retornando algo para usuário - ex: alerta

//alert("Olá!");

//prompt - Imprime uma mensagem e espera o usuário digitar algo. Caixa de texto para receber valores do usuário - é tipo um alerta, mas vai ter uma inserção do usuário.

//prompt("Qual é o seu nome?");

//confirm - Imprime uma mensagem e espera o usuário escolher sim ou não. É bastante utilizada para alguns elementos, exemplo abaixo. Caixa de texto para confirmação. Trabalha bem com valores boleanos. 

//confirm("Deseja baixar novamente?");

//É possível colocar em ordem para fazer da maneira mais eficaz. Ele tem uma ordem para ler e executar. 

//Para gravar as informações - tem se: var, const e let
//var = variável de escopo global e sbrescrível - aceia novas alterações.
var varTeste = 0
varTeste = 10

//tipos de dados (teste de dados = typeOf)
//var varTeste = 5 - number
//varTeste = "teste" - string
//varTeste = tru - boolean
//varTeste = [] - object

//const = por via regra é uma variável, mas não aceita novos valores ou que mexa com o valor inicial. Bom para usar quando os valores forem fixos. Variável escopo global e não sobrescrevível.

const constTeste = 0

//let - a única diferença que ele estará agregado porque ele é uma variável temporário. Variável de escopo local e sobrescrevivél. Não armazena os valores.
function teste(){
    let letTeste = 0
}

let letTeste = 1

console.log(varTeste)
console.log(constTeste)
console.log(letTeste)

//Pegar o nome do usuário para depois imprimir novamente em seja bem vindo, javascript também aceita áspas simples  e não tem a obrigação de ponto e vírgula no final. Mas sempre é bom colocar. 

//ALGORITMO SIMPLES DE IMPRIMIR O NOME DA PESSOA
function nome(){
    var nome = prompt("Qual o seu nome?");
    alert("Seja bem vindo "+nome+ ". Aproveite a estadia!");
    alert(`Seja bem vindo ${nome} Aproveite a estadia!`);
}

//ALGORITMO DE CONTINHA SIMPLES
//parseInt = número inteiro - converte para inteiro
//parseFloat = número com casa decimal - converte para real
//Number = converte para número (tanto real, quanto inteiro)

//function é quando se cria um procedimento, porém só irá executar somente se for chamado no console. procedimento ou bloco de códigos que serão chamados para serem executados.

function somar(){
    var numero1 = parseInt(prompt("Qual é o primeiro número?"));
    var numero2 = Number(prompt("Qual é o segundo número?"));

    var resultado = numero1 + numero2
    alert(resultado)
}

//parametro = são identifiadores dos valores passados dentro dos parênteses.
function produto(valor){
    alert(`Este produto vale : ${valor}`)
}

function produto(valor,nome){
    alert(`Este produto vale : ${valor}`)
    alert(`Este nome do produto : ${nome}`)
}
//quando for colocar o nome do produto lá no console precisa estar entre áspas. 