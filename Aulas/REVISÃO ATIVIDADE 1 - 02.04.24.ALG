Algoritmo "REVISÃO ATIVIDADE 1 - 02.04.24"
// 
//  
// Descrição   : Ler três números diferentes e mostrá-los em
//ordem crescente. Idem para ordem decrescente. (dica salve
//em variaveis o maior, meio e menor)
// Autor(a)    : Nathália Sayuri Pereira Seki
// Data atual  : 02/04/2024


Var
numero1 , numero2 , numero3 : inteiro


Inicio
escreval ("Digite o pimeiro número: ")
leia (numero1)
escreval ("Digite o segundo número: ")
leia (numero2)
escreval ("Digite o segundo número: ")
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