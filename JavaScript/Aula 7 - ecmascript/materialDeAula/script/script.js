var texto = "Olá mundo, o mundo está bonito, tchau mundo";
var nome = "Nathália"
var sobrenome = "Seki"

console.log("-------REPLACE--------")

// replace - usado para trocar o primeiro termo achado pelo segundo termo digitado no parêntese
console.log(texto.replace("mundo","banana"));

// replaceAll -usado para mudar o primeiro termo digitado pelo segundo digitado, mas vão todos encontrados no código. Bastante trocado para trocar não somente textos, mas também número ou elemento espeícifico (div, etc)
console.log(texto.replaceAll("mundo","olá"));


console.log("--------IndexOf / Includes--------")
// Esse verifica se existe ou não no sistema, vai te retornar uma pesquisa. Devolve o índece que é onde o sujeito está. O index -1 é que o termo não existe na declaração, é a forma de dizer que o termo não está nesse tipo de arquitetura. Se 0 ou maior é porque o termo existe e se localiza nesse índice.
var alunos = ["Leo","Juliana","Fernanda",nome]
var pesquisa = alunos.indexOf("")
// console.log(pesquisa)

if(pesquisa >= 0){
    console.log("item foi encontrado!")

}else{
    console.log("item não encontrado! Tente novamente.")
}

// Includes - ele retorna em booleano, falso (false) ou positivo (true). Porém não indica a localização.
var pesquisa2 = alunos.includes("Leo")

if(pesquisa >= 0 || pesquisa2 == true){
    console.log("Item foi encontrado!")
}else{
    console.log("Item não foi encontrado! Tente novamente.")
}