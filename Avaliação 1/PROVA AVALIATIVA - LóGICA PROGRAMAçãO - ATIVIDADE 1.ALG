Algoritmo "Prova Avaliativa - L�gica Programa��o - Atividade 1"
// 
//  
//Descri��o   : Escreva um algoritmo com ENQUANTO que permita a
//leitura das notas de uma turma de 5 alunos. Calcular a m�dia da
//turma e contar quantos alunos obtiveram nota acima desta m�dia
//calculada. Escrever a m�dia da turma e o resultado da contagem.

// Autor(a)    : Nath�lia Sayuri Pereira Seki
// Data atual  : 03/04/2024

Var
contador , totalAlunosAcimaMed : inteiro
nota : vetor [1..5] de real
mediaNota : real



Inicio
contador <- 1
enquanto (contador <= 5) faca
   escreval ("Insira a ", contador, " � nota")
   leia (nota [contador])
contador <- contador + 1
mediaNota <- (nota[1] + nota[2] + nota [3] + nota[4] + nota[5]) / 5

//se (nota[1] >= mediaNota) e (nota[2] >= mediaNota) e (nota[3] >= mediaNota) e (nota[4] >= mediaNota) e (nota[5] >= mediaNota) entao

se (nota[contador] >= mediaNota) entao
totalAlunosAcimaMed <-
senao

fimSe


fimEnquanto







Fimalgoritmo