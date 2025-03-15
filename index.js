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

