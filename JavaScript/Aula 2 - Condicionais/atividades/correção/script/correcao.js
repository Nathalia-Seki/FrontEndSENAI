function ex1(){
    //receber idade (INPUT - receber dados)
    //if 
    //verificando a faixa etária
    //informar ao usuário (OUTPUT - saída de dados)

    let idade = Number(prompt("Digite a sua idade:"));

    //processamento dos dados
    //pode colocar o & duas vezes, mas não tem diferença de maior obrigatoriedade ou algo assim.
    if(idade >=0  && idade < 15){
        alert("Criança");
    }else if(idade >=16  && idade < 30){
        alert("Jovem");
    }
}

//e vai seguindo assim até o final das faixas e no final igual ao que eu fiz.

function ex2(){
    let dolares = Number(prompt("Insira a quantidade em dólares"))
    const cota = 5.10

    let reais = dolares * cota
    alert(`O valor em reais é de: ${reais}`)

}