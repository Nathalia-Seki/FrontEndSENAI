var empregado = ''
var qtdDefilhosMenores14anosOuInvalidos = ''
var salarioContribuicao = ''
var valor1 = 41.37

var bntCalcular = document.querySelector("#calcularSalarioFamilia");

bntCalcular.addEventListener('click',salarioFamilia);


function salarioFamilia(){
    qtdDefilhosMenores14anosOuInvalidos = document.querySelector("#qtdDefilhosMenores14anosOuInvalidos").value;
    salarioContribuicao = document.querySelector("#salarioContribuicao").value;

    if (salarioContribuicao <= 806.80){; 
        alert(`${empregado}, o valor a receber é de R$ ${(qtdDefilhosMenores14anosOuInvalidos*valor1).toFixed(2)}`)
    }else if(salarioContribuicao >= 806.81 & salarioContribuicao <=1212.64){
        alert("Jovem")
    }else if(salarioContribuicao >1212.64){
        alert("Adulto")
    }else{
        alert("Dado inválido!")
    }
}
