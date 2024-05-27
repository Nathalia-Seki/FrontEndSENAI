//Essa forma abaxo muito trabalhoso o gerenciamento manual e não é práico

//var clienteNome = "Léo";
//var clienteConta = 1;
//var clienteSaldo = 0;
//var clentePagamento = ["Pix","Crédito"];
//var clienteCpf = 99999999;
//var cleinteRg = 88888;

//POO - PROGAMAÇÃO ORIENTADO A OBJETO
// class - é um molde de objeto. É possível incluir informações via class, mas ficará pardrão para todos.
class Cliente {
    //atributo / propriedade = são características do objeto
    nome;
    conta;
    saldo = 0;
    pagamentos;
    cpf;
    rg;
    dataDeNascimento;

    //método = método é uma ação feita pelo objeto
    sacar(valor){
        this.saldo -= valor
        //return = retornar um valor assim que o médtodo for chamado.
        return `O valor de R$ ${valor} foi sacado com sucesso!`
    }
    depositar(valor){
        this.saldo += valor
        return `O valor de R$ ${valor}} foi depositado com sucesso!`
    }
}

//new class = um novo objeto baseado pelo molde o class.
var cliente1 = new Cliente;
var cliente2 = new Cliente;

//Também é possível fazer a inclusão de dados dinâmicamente
var cliente1 = new Cliente;
cliente1.nome = "Léo";
cliente1.conta = 1;
cliente1.pagamentos = ["Pix","Débito"];
cliente1.cpf = 99999999;
cliente1.rg = 8888888;
cliente1.dataDeNascimento = "13/02/2001";

var cliente2 = new Cliente;

//objeto também aceita finction