class carro{
    constructor(nomeP,modeloP,anoP,corP,velocidadeMaxP){
        this.marca = nomeP;
        this.modelo = modeloP;
        this.ano = anoP;
        this.cor = corP
        this.velocidadeMax = velocidadeMaxP;
        this.velocidadeAtual = 0;   
    }
    acelerar(velocidade){
        if(velocidade <= 0 || velocidade >= this.velocidadeMax){
            return `Operação não autorizada!`
        }else{
            this.velocidadeAtual += velocidade
            return `O carro acelerou ${velocidade} Km/h.`
        }
    }

    desacelerar(velocidade){
        if(this.velocidadeAtual < velocidade){
            return `Operação não autorizada!`
        }else{
            this.velocidadeAtual -= velocidade
            return `O carro desacelerou ${velocidade} Km/h.`
        }
    }

    verificarVelocidade(){
        return this.velocidadeAtual
    }

    
}

var carro1 = new carro("gol","gol1.0","2020","branco",168)

