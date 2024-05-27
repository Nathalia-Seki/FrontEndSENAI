//sistema mais prático e rápido do que colocar a base manual
//contrutor vvai conversar com o atributo e o complemento.

class ClienteVip {
    //constructor - recebe os valores e atribui nos atributos 
    constructor(nomeP,cpfP,pagamentoP){
        //Quando tiver com o _ não consegue modificar pelo console, é uma função que já vai entrar em vigor, ou seja, que não vai conseguir sobrescrever, para ficar bloqueado. Apenas métodos poderão alterá-lo.
        this._nome = nomeP;
        this.saldo = 0;
        this.cpf = cpfP;
        this.pagamentos = pagamentoP;
    }
    sacar(valor){
        if(this.saldo < valor){
            return `Operação não autorizada`
        }else{
            this.saldo -= valor
            return `O saque do valor R$ ${valor} foi efetuado com sucesso!`
        }
    }
    depositar(valor){
        if(valor <= 0){
            return `Operação não autorizada`
        }else{
            this.saldo += valor
            return `O depósito do valor R$ ${valor} foi efetuado com sucesso!`
        }
    }
    verificarSaldo(){
        return this.saldo
    }
}



//quando trabalhado com constructor podemos passar os valores entre os parênteses ao invés de passar linha por linha (método padrão).
var vip1 = new ClienteVip("Davinci",99999999,["Pix"])
var vip2 = new ClienteVip("Alessandra",88888888,["Pix","Cartão"])




