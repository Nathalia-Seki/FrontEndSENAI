Algoritmo "semnome"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 22/03/2024
Var
// Seção de Declarações das variáveis 
pesoPeixe , pesoExcesso , multa : real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreval ("Boa tarde! Digite o peso do peixe em kg:  ")
leia (pesoPeixe)

limpaTela ()
se (pesoPeixe > 50) entao
    pesoExcesso <- pesoPeixe - 50
    multa <- pesoExcesso * 4
    escreval ("O peso do peixe ultrapassou 50kg e o valor da multa é de", multa , " reais")
    
senao
  se (pesoPeixe < 50) entao
     pesoPeixe <- 0
     pesoExcesso <- 0
     multa <- 0

     escreval ("O peso do peixe não ultrapassou 50kg e o valor da multa é de", multa , " reais")
  fimse
fimse

Fimalgoritmo