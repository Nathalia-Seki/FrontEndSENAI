// promisses -  é uma promessa - verifica se ocorreu ou não. Onde podemos cumprir o esperado, ou quebrar a promessa de um resultado esperado, ou seja, resultado pré-programado.
// var promessa = new Promisse(resolve,reject) 
// essa abaixo é uma function anônima que tem essas chave ({}). Será executada quando o elemento pai for cumprido. Coninua sendo uma função para ser cumprida o projeto. 
//Resolve = Rodou dentro dos padrões. Foi resolvido, mas porque foi resolvido
//Reject - Algo saiu do esperado. Não foi resolvido e o porquê. Erro!
// reject(reason), reason = o motivo daquela promessa ter sido quebrada, ou seja, motivo do resultado não ter sido alcançado.
// Espera-se que dê certo.
var promessa = new Promise((resolve,reject) => {
    let nome = "leo";
    console.log("----Promise----")

    if(nome == "Nathália"){
        resolve("O usuário foi encontrado")
    }else{
        reject("O usuário não é a Nathália")
    }
})

// leitura será - promesa.então(faça => {algo} )
// then = roda o programa esperando resultados programados - uma aplicação para que dê certo e quando der errado vai ficar em vermelho.
promessa.then((resultado) => {
    console.log(resultado)
})

// cath - não é muito utilizado, além de via teste. roda o programa esperando todos os resultados não esperados (erros,rejects)
// retorna só tudo o que dá errado. Ou o que pode dar errado na promessa.
// leitura será - promessa.então(faça => {algo esperando um erro}).
promessa.catch((resultado) => {
    console.log(resultado)
})  

// processo assíncrono

function codigoDemorado(){
    return new Promise((resolve) => {
        // setTimeOut = define um cronômetro antes de rodar o bloco de código
        // coloqueUmTempo (faça {algo}, emQuantoTempo) obs: A contagem é feita em milisegundos;
        setTimeout(() => {
            console.log("Enrolei")
            resolve()
        },3000)
    })
}

// assicrono - lê o código em orde, porém se uma linha dmeora, ele ignora ou roda após a ordem correta.

// sincrono (async) - lê o código, porém ele tem a capacidade de espera um processo acontecer para poder continuar a sua leitura. Para forçar as outras estapas que ver depois aguardar o código demorado acontecer e depois seguir- ou seja, que a ordem importa. Porque em geral não espera carregar pra executar um código e faz e por último ele acontece.

async function carregando(){
    console.log("Comecei")
    // await - aguarde um processo ser concluído, antes de continuar a leitura do código.
    await codigoDemorado()
    console.log("Terminei")
}

carregando()

