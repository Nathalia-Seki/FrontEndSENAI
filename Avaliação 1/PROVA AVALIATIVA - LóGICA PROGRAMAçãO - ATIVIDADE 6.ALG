Algoritmo "PROVA AVALIATIVA - L�GICA PROGRAMA��O - ATIVIDADE 6"
// 
//  
// Descri��o   : Escreva um algoritmo que permita a leitura dos nomes
// de 10 pessoas e armazene os nomes lidos em um vetor. Ap�s isto, o
// algoritmo deve permitir a leitura de mais 1 nome qualquer de pessoa
// e depois escrever a mensagem ACHEI, se o nome estiver entre os 10
// nomes lidos anteriormente (guardados no vetor), ou N�O ACHEI caso
// contr�rio.
// Autor(a)    : Nath�lia Sayuri Pereira Seki
// Data atual  : 03/04/2024

Var
nome : vetor [1..10] de caractere
contador : inteiro
nome1 : caractere
Inicio
para contador <- 1 ate 10 faca
   escreval ("Insira o ", contador, " � nome: ")
   leia (nome[contador])
fimPara
limpaTela()

   escreval ("Insira o nome que deseja buscar: ")
   leia (nome1)
   se (nome1 = nome[contador]) entao
      escreval ("Achei.")
   senao
      escreval ("N�o achei.")
   fimSe



Fimalgoritmo