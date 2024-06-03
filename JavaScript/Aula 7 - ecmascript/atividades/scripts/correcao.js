// function replaceEx(){
//     <button type="button" onclick="substituir()" id="substituir">SUBSTITUIR</button>
//     <button type="button" onclick="substituir()" id="substituir">SUBSTITUIR TUDO</button>

// }

// Substitir e substituir tudo = função para atualizar um texto digitado pelo usuário
// INPUT = pegar textoDigitado, termoRemover, termoAdicionado
// OUTPUT = Imprime (sai) texto atualizado.
function substituir(){
    let textoDigitado = document.querySelector("textoDigitado").value;
    let textoRemover = document.querySelector("termoRemover").value;
    let termoAdicionado = document.querySelector("termoAdicionado").value;

    let termoAualizado = textoDigitado.replace(termoRemover,termoAdicionado);

    document.querySelector("#textoDigitado").value = textoAtualizado;
}

function substituirTudo(){
    let textoDigitado = document.querySelector("textoDigitado").value;
    let textoRemover = document.querySelector("termoRemover").value;
    let termoAdicionado = document.querySelector("termoAdicionado").value;

    let termoAualizado = textoDigitado.replace(termoRemover,termoAdicionado);

    document.querySelector("#textoDigitado").value = textoAtualizado;
}

// EXERCÍCIO 2
// Função para verificar se o usuário é adm
// INPUT = nome , senha
// OUTPUT = mensagem de verificação no console
function promiseEx(){
    new Promise((resolve,reject) => {
        let usuarioSalvo = "ADM";
        let senhaSalvo = "ADM";

        let usuario = prompt("Digite o seu usuário:");
        let senha = prompt("Digite a sua senha");

        if(usuario == usuarioSalvo & senha ==senhaSalvo){
            alert("Usuário foi identificado! Pode entrar");
            resolve()
        }else{
            alert("Usuário ou senha incorretos. Digite novamente");
            reject("Usuário ou senha não batem com o esperado")
        }
    })
}