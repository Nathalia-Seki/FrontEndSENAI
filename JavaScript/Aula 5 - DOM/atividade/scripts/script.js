var empregado =""
var qtdDefilhosMenores14anosOuInvalidos = ""
var salarioContribuicao = ""

function salarioFamilia(){
    qtdDefilhosMenores14anosOuInvalidos = document.querySelector("#qtdDefilhosMenores14anosOuInvalidos").value;
    salarioContribuicao = document.querySelector("#salarioContribuicao").value;

    if (salarioContribuicao <= 806.80){;
        alert("Criança");
    }else if(salarioContribuicao >= 806.81 & salarioContribuicao <=1212.64){
        alert("Jovem")
    }else if(salarioContribuicao >1212.64){
        alert("Adulto")
    }else if(salarioContribuicao >61){
        alert("Idoso")
    }else{
        alert("Dado inválido!")
    }
}
