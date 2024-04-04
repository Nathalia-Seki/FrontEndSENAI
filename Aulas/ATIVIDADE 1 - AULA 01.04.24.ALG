Algoritmo "Atividade 1 - Aula 01.04.24"
// 
//  
// Descrição   : Uma loja está levantando o valor total
//3 mercadorias em  estoque. Escreva um algoritmo que
//permita a entrada das seguintes informações:
//a) O nome de cada mercadoria
//b) o valor de cada mercadoria.
//Ao final imprimir o valor total em estoque e a média de
//valor das mercadorias.

// Autor(a)    : Nathália Sayuri Pereira Seki(a)
// Data atual  : 01/04/2024


Var
mercadorias : vetor [1..3] de caractere
valorMercadorias : vetor [1..3] de real
contador : inteiro
resultado, valorMedia : real

Inicio
para contador <- 1 ate 3 faca
   escreval ("Digite qual a", contador, " ° mercadoria")
   leia (mercadorias [contador])
   escreval ("Digite o valor da", contador, " º mercadoria")
   leia (valorMercadorias [contador])
   
limpaTela ()

   resultado <- valorMercadorias[1] + valorMercadorias[2] + valorMercadorias[3]
   escreval ("Valor total em estoque é de R$", resultado)

   valorMedia <- resultado / 3
   escreval ("E a média das 3 mercadorias é de R$", valorMedia)

   


fimPara
// leia (valorMercadorias [numero])

Fimalgoritmo