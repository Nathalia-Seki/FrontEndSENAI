Algoritmo "Ler dois valores e imprimir uma das três mensagens"
// 
//  
// Descrição   : Ler dois valores e imprimir uma das três mensagens
// Autor(a)    : Nathália Sayuri Pereira Seki
// Data atual  : 24/03/2024
//Objetivo: Ler dois valores e imprimir uma das três mensagens a seguir:
//‘Números iguais’, caso os números sejam iguais
//‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
//‘Segundo maior’, caso o segundo seja maior que o primeiro.


Var
// Seção de Declarações das variáveis 
primeiroNumero : inteiro
segundoNumero : inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreval ("Olá! Digite o primeiro número: ")
leia (primeiroNumero)

escreval ("Digite o segundo número: ")
leia (segundoNumero)

limpaTela()

se (primeiroNumero = segundoNumero) entao
   escreval ("Números iguais!")
senao
   se (primeiroNumero > segundoNumero) entao
      escreval ("Primeiro é maior!")
   senao
      se (primeiroNumero < segundoNumero) entao
         escreval ("Segundo é maior!")
      fimse
   fimse
fimse

Fimalgoritmo