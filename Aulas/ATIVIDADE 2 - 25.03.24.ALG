Algoritmo "Atividade 2 - 25.03.24"
// 
//  
// Descrição   : Faça um algoritmo para ler uma quantidade de números e a seguir ler
//cada um de forma respectiva. Depois de ler todos os números o algoritmo deve apresentar
//na tela o maior dos números lidos
// Autor(a)    : Nathália Sayuri Pereira Seki
// Data atual  : 25/03/2024

Var
// Seção de Declarações das variáveis 
numero1 , numero2, numero3 : inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreval ("Boa tarde! Digite o primeiro número: ")
leia (numero1)
escreval ("Digite o segundo número: ")
leia (numero2)
escreval ("Digite o terceiro número: ")
leia (numero3)
se (numero1 > numero2) e (numero1 > numero3) entao
   escreval ("O primeiro número é maior")
senao
   se (numero2 > numero1) e (numero2 > numero3) entao
      escreval ("O segundo número é maior")
   senao
      escreval ("O terceiro número é maior")
   fimSe
fimSe

Fimalgoritmo