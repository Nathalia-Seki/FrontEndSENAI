//console.log é utilizado para testar no console se está dando certo.

var valorTotal = 0;

//Essa condição é - ou seja se estiver dessa maneira eu não quero que entre no meu sistema e manda o alerta. Mas senão dor, então pode adicionar ao carrinho.
//Esse comando || = significa OU e o E será representado por & 
//No caso abaixo é "ou" porque basta uma condição ser verdadeira para o bloco ser executado. Se colocar "e" vai precisar ser as duas condições para ser executada.
//= significa atribuição
//== significa comparação de conteúdo
//=== significa comparação de conteúdo e tipo 
function adicionarAoCarrinho(produto, valor){
    if(produto == '' || valor <=0){
        alert("Opção inválida ou não funciona!")
    }else{
        valorTotal += valor;
        alert(`O produto : ${produto} foi adicionado!`)
        totalCarrinho();
    }
}

function totalCarrinho(){
    alert(`Total da compra $: ${valorTotal}`)
}