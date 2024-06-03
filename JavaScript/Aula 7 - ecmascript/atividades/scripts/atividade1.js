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

// EXERCÍCIO 3 
// Input de pesquisa para buscar um elemento dentro do array, caso exsista, então imprima na tela a mensagem que foi encontrado e caso contrário, imprimir na tela que o elemento não existe na linguagem.
// INPUT: elemento
// OUTPUT: Mensagem de verificação

corpo.innerHTML +=
<input id="pesquisa" placeholder="Digite um termo a ser pesquisado" onfocusout="pesquisaEx()" type="text"></input>

function pesquisaEx(){
    let listaElementos = ["God Of War","Computador","Vingadores"]

    let pesquisa = document.querySelector("#pesquisa").value 

    let Achou = listaElementos.includes(pesquisa)

    if(Achou == true){
        alert("Elemento encontrado")
    }else{
        alert("Elemento não encontrado!")
    }
}
    