Algoritmo "CORREÇÃO ATIVIDADE 2 - 01.04.24"
// 
//  
// Descrição   : Faça um algoritmo para ler 10 números e armazenar em
//um vetor, após a leitura de todos eles, o algoritmo deverá
//escrever eles de forma inversa Desconsiderando os valores dos números)
// Autor(a)    : Nathália Sayuri Pereira Seki
// Data atual  : 01/04/2024

Var
numeros : vetor [1..10] de inteiro
contador : inteiro

Inicio
para contador <- 1 ate 10 faca
   escreval ("Insira o seu ", contador, " ° número")
   leia (numeros [contador])
   limpaTela()
fimPara

   para contador <- 10 ate 1 passo -1 faca
      escreval (numeros [contador])
   fimPara

Fimalgoritmo