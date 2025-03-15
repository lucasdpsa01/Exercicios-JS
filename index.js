//Exercício - Polimorfismo

class Veiculo{
    mover(){
        console.log("movendo");
    }
}

class Carro2 extends Veiculo{
    mover(){
        console.log("vrum vrum");
    }
}

class Bicicleta2 extends Veiculo{
    mover(){
        console.log("brum brum")
    }
}

class Aviao2 extends Veiculo{
    mover() {
        console.log("aaauuuuummmm")
    }
}

const carro = new Carro2();
carro.mover();  // "O carro está dirigindo na estrada."

const bicicleta = new Bicicleta2();
bicicleta.mover();  // "A bicicleta está pedalando pela ciclovia."

const aviao = new Aviao2();
aviao.mover();  // "O avião está voando no céu."

// Exercício - Getters e Setters
class Produto2{
    #preco;

    constructor(preco){
        this.#preco = preco;
    }

    get preco() {
        return this.#preco
    }
    
    set preco(novopreco) {
        if (novopreco >= 0) {
            this.#preco = novopreco;
        } else {
            console.log("Inválido")
        }
    }

}

const produto = new Produto2(50);
console.log(produto.preco);  // 50

produto.preco = 100;
console.log(produto.preco);  // 100

produto.preco = -20;  // "Preço inválido!"
console.log(produto.preco);  // 100 (não foi alterado)

// Exercício - Tudo

class Banco{
    static nomeBanco = "Banco do paivinha"
}

class Conta{
    
    #saldo;
    constructor() {
        this.#saldo = 0
    }

    depositar(valor) {
       if (valor > 0) {
        this.#saldo += valor
        console.log("depositado com sucesso!!")
       } else {
        console.log("valor inválido")
       }
    }

    sacar(valor) {
        if (valor > this.#saldo) {
            console.log("Saque inválido")
        } else {
            this.#saldo -= valor
        }
    }

    get saldo() {
        return this.#saldo;
    }
}

class ContaPoupanca extends Conta{
    rendimento() {
        const saldo = this.saldo;
        const rendimento = saldo * 0.05;
        this.depositar(rendimento);
    }
}

class ContaCorrente extends Conta{
    rendimento() {
        const saldo = this.saldo;
        const rendimento = saldo / 0.05;
        this.depositar(rendimento);
    }

    cobrarTaxa() {
        this.sacar(this.saldo * 0.02);
    }
}

console.log(Banco.nomeBanco);

const contaP = new ContaPoupanca();
contaP.depositar(1000);
contaP.rendimento();
console.log(contaP.saldo);  // 1050

const contaC = new ContaCorrente();
contaC.depositar(1000);
contaC.cobrarTaxa();
console.log(contaC.saldo);  // 980
