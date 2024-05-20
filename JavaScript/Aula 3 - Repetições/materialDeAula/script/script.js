const resposta = document.getElementById("resposta");
//document = se refere ao documento html
//getElementById = busca pelo elemento Id do html
//localizacao.innerHTML = se refere ao conteúdo dentro do elemento 

//REPETIÇÕES:
//enquanto (condição) faca.. 
//contador <- contador + 1
//fimEquanto

//enquanto será o while - sintaxe será
//pode usar duas formas = contador = contador + 1 ou contador++

function teste1(){
    var contador = 1;
    resposta.innerHTML = ""
    while  (contador <= 10){
        //resposta.innerHTML += contador
        resposta.innerHTML +=`
            <div class="produto"
                <h3> PRODUTO ${contador} </h3>
                <p> descrição </p>
            </div>
        `
        contador = contador + 1;
}
}

function teste2(){
    //ate... (condição)
    //faça e verifica
    //let i = igual ao contador.
    //obs = DO te garante uma execução independete se a condição for verdadeira ou falsa.
    resposta.innerHTML = ""
    let i = 1
    do{
        resposta.innerHTML += "FRONT END É TOP <br>";
        i++
    }while(i <= 10);
}

function teste3(){
    //para var, condição, controlador.. fimPara
    //for = para
    for(let i = 1; i<=5; i++){
        alert(`Esse é ${i}º alert!`)
    }
}

function teste4(){
    //[] é um array - que é um vetor como chamávamos em portugol
    //não precisa limitar o vetor, o js vai 
    let produtos = ["Imposto","Pastel","Playstation","Pão de queijo", "Sorvete", "Rojão","Nintendinho"]
    console.log(produtos)
}

function teste5(){
    //[] é um array - que é um vetor como chamávamos em portugol
    //forEach ele vai fazer a repetição para cada elemento de uma lista (Array). E ão precisa deixar o númeoro de repetição fixo e fica mais dinâmico.

    let produtos = ["Pastel","Playstation","Pão de queijo", "Sorvete", "Rojão","Nintendinho","Frutas","Suco"]
    console.log(produtos)
    produtos.forEach(element => {
        resposta.innerHTML += `
            <h5> ${element} </h5>
        `
    });
}

function teste6(){
    //em resposta o professor colocou um bootstrap
    //length = conta quantos elementos existem dentro do array. Outra fora de fazer e ficar dinâmico.

    var filmes = ["Harry Potter","Vingadores","Gato de Botas","Shrek","Onde Piece"]

    for(let i = 0; i < filmes.length; i++){
        resposta.innerHTML+= `
        <div class="card bg-dark text-white" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${filmes[i]}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        `
    }
}