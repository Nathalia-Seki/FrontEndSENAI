//o function Exercicio1, ele tem como função coletar quantos clientes são e quanto que a mesa gastou, e fazer com que esse valor seja distribuido de forma igual.
//INPUT = quantidadeClientes, valorTotalMesa
//OUTPUT = valorDivido

//forma de fazer 01
function Exercicio1(){
    let qntClientes = Number(prompt("Insira a quantidade de clientes na mesa:"));
    let valorTotalMesa = Number(prompt("Insira qual foi o valor total da mesa R$:"));

    let valorDivido = valorTotalMesa/qntClientes;

    alert(`O valor para cada cliente será de R$: ${valorDivido.toFixed(2)}`);
}

//forma de fazer 02
function Exercicio01(){
    let qntClientes = Number(prompt("Insira a quantidade de clientes na mesa:"));
    let valorTotalMesa = Number(prompt("Insira qual foi o valor total da mesa R$:"));

    alert(`O valor para cada cliente será de R$: ${(valorTotalMesa/qntClientes).toFixed(2)}`);
}

//o function exercício2, tem como função coletar um número e logo em seguida demonstrar em ordem o antecessor, o número inserido e o seu sucessor. 
//INPUT : numero
//OUTPUT : antecessor, numero, sucessor
function Exercicio2(){
    let numero = Number(prompt("Digite o número desejado:"));
    
    let antecessor = numero - 1;
    let sucessor = numero + 1;

    alert(`O antecessor é: ${antecessor}, o número digitado é: ${numero} e o sucessor: ${sucessor}`)
}