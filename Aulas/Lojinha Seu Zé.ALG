Algoritmo "semnome"
//  
//  
// 
//  
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 21/03/2024
Var
// Se��o de Declara��es das vari�veis 
opcao , tenteNovamente , tentaNovamente : caractere
valor , subtotal : real


Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
tentaNovamente <- "sim"
enquanto (tentaNovamente = "sim") faca
   escreval ("-----Lojinha do Seu Z�-----")
   escreval ("A) BEBIDA = R$12")
   escreval ("B) CHOCOLATE = R$ 80")
   escreval ("C) BOLO = R$ 10")
   escreval ("D) PASTEL DE QUEIJO = R$6.50")
   escreval ("E) PIZZA = R$ 49")
   escreval ("F) FINALIZAR PEDIDO")
   escreval ("-------------------------------")

   escreval ("Qual a op��o desejada?")
   leia (opcao)

   escolha (opcao)
   caso ("A")
       escreval ("item adicionado!")
       valor <- 12
       subtotal <- subtotal + valor
       limpaTela()
   caso ("B")
       escreval ("item adicionado!")
       valor <- 80
       subtotal <- subtotal + valor
       limpaTela()
   caso ("C")
       escreval ("item adicionado!")
       valor <- 10
       subtotal <- subtotal + valor
       limpaTela()
   caso ("D")
       escreval ("item adicionado!")
       valor <- 6.50
       subtotal <- subtotal + valor
       limpaTela()
   caso ("E")
       escreval ("item adicionado!")
       valor <- 49
       subtotal <- subtotal + valor
       limpaTela()
   caso ("F")
       escreval ("Pedido finalizado! Agradecemos a prefer�ncia")
       tentaNovamente <- "nao"
       limpaTela()
       escreval ("O subtotal da compra � de: R$", subtotal)
   outroCaso
       escreval ("Opera��o inv�lida")
       escreval ("Deseja tentar novamente? s/n")
       leia (tenteNovamente)
    limpaTela()
   fimEscolha
fimEnquanto



Fimalgoritmo