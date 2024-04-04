Algoritmo "semnome"
//  
//  
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 21/03/2024
Var
// Seção de Declarações das variáveis 
opcao , tenteNovamente , tentaNovamente : caractere
valor , subtotal : real


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
tentaNovamente <- "sim"
enquanto (tentaNovamente = "sim") faca
   escreval ("-----Lojinha do Seu Zé-----")
   escreval ("A) BEBIDA = R$12")
   escreval ("B) CHOCOLATE = R$ 80")
   escreval ("C) BOLO = R$ 10")
   escreval ("D) PASTEL DE QUEIJO = R$6.50")
   escreval ("E) PIZZA = R$ 49")
   escreval ("F) FINALIZAR PEDIDO")
   escreval ("-------------------------------")

   escreval ("Qual a opção desejada?")
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
       escreval ("Pedido finalizado! Agradecemos a preferência")
       tentaNovamente <- "nao"
       limpaTela()
       escreval ("O subtotal da compra é de: R$", subtotal)
   outroCaso
       escreval ("Operação inválida")
       escreval ("Deseja tentar novamente? s/n")
       leia (tenteNovamente)
    limpaTela()
   fimEscolha
fimEnquanto



Fimalgoritmo