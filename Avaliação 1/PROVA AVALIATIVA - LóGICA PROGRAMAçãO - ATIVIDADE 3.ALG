Algoritmo "PROVA AVALIATIVA - LóGICA PROGRAMAçãO - ATIVIDADE 3"
// 
//  
// Descrição   : Faça um algoritmo para ler: número da conta do
//cliente, saldo, débito e crédito. Após, calcular e escrever
//o saldo atual (saldo atual = saldo - débito + crédito).
//Também testar se saldo atual for maior ou igual a zero escrever
//a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'.
// Autor(a)    : Nathália Sayuri Pereira Seki
// Data atual  : 03/04/2024

Var
numeroConta : inteiro
saldo, debito, credito, saldoAtual : real

Inicio
escreva ("Insira o número da sua conta: ")
leia (numeroConta)
limpaTela()
escreva ("Digite o seu saldo: ")
leia (saldo)
escreva ("Digite o valor em débito: ")
leia (debito)
escreva ("Digite o valor em crédito: ")
leia (credito)
limpaTela()

saldoAtual <- saldo - (debito + credito)
se (saldoAtual >= 0) entao
   escreval ("Saldo Positivo. É de R$ ",saldoAtual," reais." )
senao
   escreval ("Saldo Negativo. É de R$ ",saldoAtual," reais.")
fimSe

Fimalgoritmo