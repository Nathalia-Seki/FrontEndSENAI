document.querySelector("#cep").addEventListener("focusout",buscaCep);

// focusout = clicou do lado de fora vai ativar a função.

function buscaCep(){
    let cep = document.querySelector("#cep").value;
    
    if(cep.length !== 8){
        alert("Digite um cep válido, um cep com 8 dígitos!");
    }else{
        fetch(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
            return response.json()
            // nessa primeira parte ele verificou o servidor se está funcionando
        }).then((dados) => {
            document.querySelector("#logradouro").value = dados.logradouro;
            document.querySelector("#complemento").value = dados.complemento;
            document.querySelector("#bairro").value = dados.bairro;
            document.querySelector("#localidade").value = dados.localidade;
            document.querySelector("#uf").value = dados.uf;
        })
    }
}

// length = cota quantos caracteres tem.
// !== : Significa diferente de ...
// fetch = ferramenta de buscar API 
// then((response)) = roda a resposta do servidor esperando que tudo esteja ok.
// then((dados)) = roda a API e nos lista os dados.
// Primeiro verifica o servidor e depois listar os dados. Boa prática.
// Servidor retorna o status em números - 200 é que está muito bom. HTTP Cats é possível listar qual erro que está acontecendo.