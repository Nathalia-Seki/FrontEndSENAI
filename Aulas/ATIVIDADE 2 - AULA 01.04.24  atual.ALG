Algoritmo "atividade 2 - aula 01.04.24 "
// 
//  
// Descri��o   : Fa�a um algoritmo para ler 10 n�meros e armazenar em
//um vetor, ap�s a leitura de todos eles, o algoritmo dever�
//escrever eles de forma inversa Desconsiderando os valores dos n�meros)
// Autor(a)    : Nath�lia Sayuri Pereira Seki
// Data atual  : 01/04/2024

Var
numero : vetor [1..10] de inteiro
contador : inteiro

Inicio
para contador <- 1 ate 10 faca
   escreval ("Digite o ", contador, " � n�mero")
   leia (numero [contador])
   
limpaTela()
fimPara

   para contador <- 10 ate 1 passo -1 faca
      escreval (numero [contador])
   fimPara


Fimalgoritmo