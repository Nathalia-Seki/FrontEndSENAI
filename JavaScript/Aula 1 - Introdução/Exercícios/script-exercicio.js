//Atividade 01

function divisao(){
var numero1 = parseFloat(prompt("Qual é o número de pessoas?"));
var numero2 = parseFloat(prompt("Qual o valor total da conta?"));

var resultado = numero2 / numero1
alert(resultado)
}

//Atividade 02

var numero1 = Number(prompt("Insira um número"))

var antecessor = numero1 - 1
var sucessor = numero1 + 1

alert(`nº antecessor: ${antecessor}, nº digitado: ${numero1} e nº sucessor: ${sucessor}`)