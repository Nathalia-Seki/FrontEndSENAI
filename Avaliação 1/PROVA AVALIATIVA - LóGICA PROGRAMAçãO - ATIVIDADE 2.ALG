Algoritmo "PROVA AVALIATIVA - LóGICA PROGRAMAçãO - ATIVIDADE 2
// 
//  
// Descrição   : A jornada de trabalho semanal de um funcionário é de
//40 horas. O funcionário que trabalhar mais de 40 horas receberá
//hora extra, cujo cálculo é o valor da hora regular com um acréscimo
//de 50%. Escreva um algoritmo que leia o número de horas trabalhadas
//em um mês, o salário por hora e escreva o salário total do
//funcionário, que deverá ser acrescido das horas extras, caso tenham
//sido trabalhadas (considere que o mês possua 4 semanas exatas).

// Autor(a)    : Nathália Sayuri Pereira Seki
// Data atual  : 03/04/2024

Var
horasSem : vetor [1..5] de inteiro
horaExtra , salario, salarioHora , valorHoraExtra , salarioTotal : real
contador , horasTrabM : inteiro


Inicio
escreva ("Insira o seu salário R$: ")
leia (salario)

contador <- 0
enquanto (contador <= 3) faca
   contador <- contador +1
   escreva ("Insira as horas trabalhadas na", contador, " ° semana: ")
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


escreval ("Salário por hora é de R$ ", salarioHora)
escreval ("Total de horas extras foram de: ", horaExtra, " horas." )
escreval ("Valor total das horas extras é de R$ ", valorHoraExtra)
escreval ("Valor total do salário + horas extras é de R$: ", salarioTotal)



//escreva ("Insira as horas trabalhadas no mês: ")

//escreva ("Insira o seu salário R$: ")
//leia (salario)



Fimalgoritmo