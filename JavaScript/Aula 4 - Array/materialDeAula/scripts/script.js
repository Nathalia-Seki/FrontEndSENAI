//método 1 - usa-se mais, pois é mais automático.
//var filmes = ["Harry Potter","Homem Aranha"]

var filmes = ["Casa Monstro"]

//metodo 2 - alternativo
//precisa fazer a inserção manual, você mesmo tem que ir incluindo.
var jogos = Array();
jogos[0] = "Mario";
jogos[1] = "Bioshock";

//adiciona na última posição do nosso array
filmes.push("Harry Potter");

//adiciona no primeira posição do nosso array
filmes.unshift("Vingadores");

//remove aqueles que está na última posição declarado
filmes.pop()

//remove aquele que está na primeira posição.
filmes.shift()

//EDITAR MEIO ARRAY
filmes.push("Power Rangers")
filmes.push("Atividade Paranormal")
filmes.push("A Nova Onda do Imperador")
filmes.push("Planeta dos Macacos")

//para editar no meio do array, será o splice - porém ele também serve para remover, alterar e editar.
//splice (qual ídice que vai mexer, a quantidade que vai mexer, qual a informação a ser adicionada) ou seja - índice/quantidade/conteudo.
//Muito utilizado em sistema de mercado.

//exemplo abaixo é para remover
filmes.splice(2,1)

//adicionar filme
filmes.splice(2,0,"Transformers")

//substiuir filme
filmes.splice(3,1,"Bob Esponja")






//imprimir na tela
var grupoFilmes = document.getElementById("grupoFilmes");

filmes.forEach(element => {
    grupoFilmes.innerHTML += `
    <div class="filme">
            <h5>${element}</h5>
            <button class="verMais">Ver Mais</button>
    </div>
`
});




