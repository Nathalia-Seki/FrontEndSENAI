// Replace

function replace(){
    var texto = prompt("Digite um texto:");
    var mudarPalavra = prompt("Digite a palavra que deseja mudar:");
    var palavraNova = prompt("Digite a nova palavra:");
    alert(texto.replace(mudarPalavra,palavraNova))
}

function mudarTudo(){
    var texto = prompt("Digite um texto:");
    var mudarPalavra = prompt("Digite a palavra que deseja mudar:");
    var palavraNova = prompt("Digite a nova palavra:");
    alert(texto.replaceAll(mudarPalavra,palavraNova))
}

function verificacao(){
    new Promise((resolve,reject) => {
        let nome = prompt("Digite o usuário");
        let senha = prompt("Digite a senha:");
    
        if(nome == "ADM" & senha == "ADM"){
            alert("Acesso permitido!")
            resolve()
        }else{
            alert("Acesso negado! Tente novamente.")
            reject("Acesso negado! Tente novamente.")
        }
    })
}
    