var calcularBtn = document.querySelector("#calcularSalarioFamilia");

calcularBtn.addEventListener("click",calcular)

function calcular(){
    //coletar valores 

    var empregado = document.querySelector("#empregado").value;
    var filho = document.querySelector("#qtdDefilhosMenores14anosOuInvalidos").value;
    var salario = document.querySelector("#salarioContribuicao").value;
    //alert(empregado) - somente para testar se está coletando os dados.

    //verificar valores
    let cota = 0

    if(salario == `opcao1`){
        cota = 41.37 * filho
    }else if(salario == `opcao2`){
        cota = 29.16 * filho
    }else if(salario == `opcao3`){
        cota = 0
    }else{
        alert ("Dados ou informações incorretas! Tente novamente.")
    }

    //retornar a cota do salário família
    alert(`O empregado : ${empregado}, terá cota família : R$ ${cota.toFixed(2)}`)

}









  