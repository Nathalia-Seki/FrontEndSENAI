Algoritmo "PROVA AVALIATIVA - L�GICA PROGRAMA��O - ATIVIDADE 3"
// 
//  
// Descri��o   : Fa�a um algoritmo para ler: n�mero da conta do
//cliente, saldo, d�bito e cr�dito. Ap�s, calcular e escrever
//o saldo atual (saldo atual = saldo - d�bito + cr�dito).
//Tamb�m testar se saldo atual for maior ou igual a zero escrever
//a mensagem 'Saldo Positivo', sen�o escrever a mensagem 'Saldo Negativo'.
// Autor(a)    : Nath�lia Sayuri Pereira Seki
// Data atual  : 03/04/2024

Var
numeroConta : inteiro
saldo, debito, credito, saldoAtual : real

Inicio
escreva ("Insira o n�mero da sua conta: ")
leia (numeroConta)
limpaTela()
escreva ("Digite o seu saldo: ")
leia (saldo)
escreva ("Digite o valor em d�bito: ")
leia (debito)
escreva ("Digite o valor em cr�dito: ")
leia (credito)
limpaTela()

saldoAtual <- saldo - (debito + credito)
se (saldoAtual >= 0) entao
   escreval ("Saldo Positivo. � de R$ ",saldoAtual," reais." )
senao
   escreval ("Saldo Negativo. � de R$ ",saldoAtual," reais.")
fimSe

Fimalgoritmo