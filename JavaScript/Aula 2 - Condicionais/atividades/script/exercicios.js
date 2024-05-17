//EXERCÍCIO 01

var idade = Number
function categoriaIdade(){
    let idade = Number(prompt("Insira a sua idade:"));

    if (idade >= 0 & idade <15){;
        alert("Criança");
    }else if(idade >= 16 & idade <30){
        alert("Jovem")
    }else if(idade >=31 & idade <60){
        alert("Adulto")
    }else if(idade >61){
        alert("Idoso")
    }else{
        alert("Dado inválido!")
    }
}

//EXERCÍCIO 2

var real = Number
var cotacaoDolar = 5.10

function conversorDolarReal(){
    let real = Number(prompt("Digite o valor R$:"))
    alert(`A conversão em dólar é de $${(real/cotacaoDolar).toFixed(2)}`)
}
