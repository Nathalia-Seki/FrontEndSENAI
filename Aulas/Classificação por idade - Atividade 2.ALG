Algoritmo "Classifica��o Nadador"
// 
//  
// Descri��o   : Classifcar um nadador de acordo com a idade em categorias.
// Autor(a)    : Nath�lia Sayuri Pereira Seki
// Data atual  : 22/03/2024
// Objetivo: Elabore um algoritmo que dada a idade de um nadador classifique-o em uma das
// seguintes categorias:
//Infantil A = 5 a 7 anos
//Infantil B = 8 a 11 anos
//Juve nil A = 12 a 13 anos
//Juvenil B = 14 a 17 anos
//Adultos = Maiores de 18 anos


Var
// Se��o de Declara��es das vari�veis 
idade : inteiro

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
escreval ("Boa tarde! Digite a sua idade: ")
leia (idade)

limpaTela ()

se (idade >= 5) e (idade <= 7) entao
   escreval ("Sua categoria � a Infantil A")

senao
   se (idade >= 8) e (idade <= 11) entao
      escreval ("Sua categoria � a Infantil B")
      
   senao
      se (idade >= 12) e (idade <= 13) entao
         escreval ("Sua categoria � a Juvenil A")
         
      senao
         se (idade >= 14) e (idade <= 17) entao
            escreval ("Sua categoria � a Juvenil B")
            
         senao
            se (idade >= 18) entao
               escreval ("Sua categoria � a Adulto")
            senao
               escreval ("Voc� n�o se enquadra em nenhuma categoria.")
            fimse
         fimse
      fimse
   fimse
fimSe

Fimalgoritmo