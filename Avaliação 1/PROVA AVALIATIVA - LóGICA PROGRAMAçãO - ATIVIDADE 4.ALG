Algoritmo "PROVA AVALIATIVA - LóGICA PROGRAMAçãO - ATIVIDADE 4"
// 
//  
// Descrição   : A prefeitura de uma cidade deseja fazer uma pesquisa
// entre seus habitantes. Faça um algoritmos para coletar dados sobre
// o salário e número de filhos de cada habitante e após as leituras,
// escrever:
// a) Média de salário da população
// b) Média do número de filhos
// c) Maior salário dos habitantes
// d) Percentual de pessoas com salário menor que R$ 150,00
// Obs.: O final da leituras dos dados se dará com a entrada de um
// “salário negativo”

// Autor(a)    : Nathália Sayuri Pereira Seki
// Data atual  : 03/04/2024

Var
contador : inteiro
salario : vetor [1..10] de real
numFilhos : vetor [1..10] de inteiro
salarioMedia , mediaNumFilhos : real


Inicio
contador <- 1
enquanto (contador < 11) faca
   escreva ("Insira o salário da ", contador, " ° família: ")
   leia (salario[contador])
   escreva ("Insira a quantidade de filhos da ", contador, " ° família: ")
   leia (numFilhos [contador])
contador <- contador + 1
fimEnquanto

salarioMedia <- (salario[1] + salario[2] + salario[3] + salario[4] + salario[5] + salario[6] + salario[7] + salario[8] + salario[9] + salario[10])/10
mediaNumFilhos <- (numFilhos[1] + numFilhos[2] + numFilhos[3] + numFilhos[4] + numfilhos [5] + numFilhos[6] + numFilhos[7] + numFilhos[8] + numFilhos[9] + numFilhos[10])/ 10
limpaTela()

escreval ("Média de salário da poplação é de R$ ", salarioMedia)
escreval ("Média de números de filhos são de ", mediaNumFilhos)




Fimalgoritmo