// Método 01 de achar o elemento (pegar o elemento)
//document.getElementById("logarUsuario");

// Método 02 e mais inteligente e eficiente de pegar o elemento. Quando for chamar pelo "id" coloca-se o # ou "." se for pela class. Ambos tem a mesma funcionalidade, a difereença é que um é mais atual que a outra.

//salvar em var para não precisar digitar tudo de novo, só chama a cariável.
var usuario = ''
var senha = ''

var btnLogar = document.querySelector("#logarUsuario");

//adicionando um evento - ao click então vai fazer login
// somente no addEventListener = adiciona um eveno, qual a função s ser executada. 
// Obs: a única funão que não precisa de parêntese na hora de chamar a function, a estrutura será:
btnLogar.addEventListener('click',fazerLogin);

function fazerLogin(){
    usuario = document.querySelector("#usuario").value;
    senha = document.querySelector("#senha").value;
    
    document.querySelector("#usuarioStatus").innerHTML = `
        Seja bem vindo(a), ${usuario} !!
    `  
}

// Catálogo

var catalogo = ["Placa de vídeo","Placa Mãe","Pocessador","Memória ram","Fonte","Monitor"];

catalogo.forEach(element => {
    document.querySelector("main").innerHTML += `
    <div class="card" style="width: 18rem;">
        <div class="card-body d-flex flex-column align-items-center">
            <h5 class="card-title">${element}</h5>
            <button onclick="adicionarCarrinho('${element}')" class="btn btn-primary">Comprar</button>
        </div>
  </div>
    `
});

var carrinho = [];

function adicionarCarrinho(produto){
    document.querySelector("#respostaCarrinho").innerHTML = ""
    carrinho.push(produto);
    alert(`O produto : ${produto} foi adicionado com sucesso!`);
    carrinho.forEach(element => {
        document.querySelector("#respostaCarrinho").innerHTML += `<h5> ${element} </h5>`
    })
}