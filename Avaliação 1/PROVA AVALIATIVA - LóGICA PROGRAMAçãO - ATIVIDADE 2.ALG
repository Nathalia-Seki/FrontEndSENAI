Algoritmo "PROVA AVALIATIVA - L�GICA PROGRAMA��O - ATIVIDADE 2
// 
//  
// Descri��o   : A jornada de trabalho semanal de um funcion�rio � de
//40 horas. O funcion�rio que trabalhar mais de 40 horas receber�
//hora extra, cujo c�lculo � o valor da hora regular com um acr�scimo
//de 50%. Escreva um algoritmo que leia o n�mero de horas trabalhadas
//em um m�s, o sal�rio por hora e escreva o sal�rio total do
//funcion�rio, que dever� ser acrescido das horas extras, caso tenham
//sido trabalhadas (considere que o m�s possua 4 semanas exatas).

// Autor(a)    : Nath�lia Sayuri Pereira Seki
// Data atual  : 03/04/2024

Var
horasSem : vetor [1..5] de inteiro
horaExtra , salario, salarioHora , valorHoraExtra , salarioTotal : real
contador , horasTrabM : inteiro


Inicio
escreva ("Insira o seu sal�rio R$: ")
leia (salario)

contador <- 0
enquanto (contador <= 3) faca
   contador <- contador +1
   escreva ("Insira as horas trabalhadas na", contador, " � semana: ")
   leia (horasSem[contador])

horasTrabM <- horasSem[1] + horasSem[2] + horasSem[3] + horasSem[4]
salarioHora <- salario / horasTrabM

se (horasTrabM > 160) entao
   horaExtra <- horasTrabM - 160
   valorHoraExtra <- horaExtra * (salarioHora + (salarioHora / 2))
   salarioTotal <- salario + valorHoraExtra
senao
   horaExtra <- 0
   valorHoraExtra <- 0
   salarioTotal <- salario
fimSe
fimEnquanto
limpaTela()


escreval ("Sal�rio por hora � de R$ ", salarioHora)
escreval ("Total de horas extras foram de: ", horaExtra, " horas." )
escreval ("Valor total das horas extras � de R$ ", valorHoraExtra)
escreval ("Valor total do sal�rio + horas extras � de R$: ", salarioTotal)



//escreva ("Insira as horas trabalhadas no m�s: ")

//escreva ("Insira o seu sal�rio R$: ")
//leia (salario)



Fimalgoritmo