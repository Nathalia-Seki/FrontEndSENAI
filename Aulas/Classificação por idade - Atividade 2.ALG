Algoritmo "Classificação Nadador"
// 
//  
// Descrição   : Classifcar um nadador de acordo com a idade em categorias.
// Autor(a)    : Nathália Sayuri Pereira Seki
// Data atual  : 22/03/2024
// Objetivo: Elabore um algoritmo que dada a idade de um nadador classifique-o em uma das
// seguintes categorias:
//Infantil A = 5 a 7 anos
//Infantil B = 8 a 11 anos
//Juve nil A = 12 a 13 anos
//Juvenil B = 14 a 17 anos
//Adultos = Maiores de 18 anos


Var
// Seção de Declarações das variáveis 
idade : inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreval ("Boa tarde! Digite a sua idade: ")
leia (idade)

limpaTela ()

se (idade >= 5) e (idade <= 7) entao
   escreval ("Sua categoria é a Infantil A")

senao
   se (idade >= 8) e (idade <= 11) entao
      escreval ("Sua categoria é a Infantil B")
      
   senao
      se (idade >= 12) e (idade <= 13) entao
         escreval ("Sua categoria é a Juvenil A")
         
      senao
         se (idade >= 14) e (idade <= 17) entao
            escreval ("Sua categoria é a Juvenil B")
            
         senao
            se (idade >= 18) entao
               escreval ("Sua categoria é a Adulto")
            senao
               escreval ("Você não se enquadra em nenhuma categoria.")
            fimse
         fimse
      fimse
   fimse
fimSe

Fimalgoritmo