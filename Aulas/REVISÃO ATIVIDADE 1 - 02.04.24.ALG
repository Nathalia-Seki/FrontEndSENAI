Algoritmo "REVIS�O ATIVIDADE 1 - 02.04.24"
// 
//  
// Descri��o   : Ler tr�s n�meros diferentes e mostr�-los em
//ordem crescente. Idem para ordem decrescente. (dica salve
//em variaveis o maior, meio e menor)
// Autor(a)    : Nath�lia Sayuri Pereira Seki
// Data atual  : 02/04/2024


Var
numero1 , numero2 , numero3 : inteiro


Inicio
escreval ("Digite o pimeiro n�mero: ")
leia (numero1)
escreval ("Digite o segundo n�mero: ")
leia (numero2)
escreval ("Digite o segundo n�mero: ")
leia (numero3)

se (numero1 > numero2) e (numero1 > numero3) entao
   escreval (numero1)
senao
   se (numero2 > numero1) e (numero2 > numero3) entao
      escreval (numero2)
   senao
      escreval (numero3)
   fimSe
fimSe


Fimalgoritmo