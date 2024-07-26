// Encapsulamento:

// Refere-se à prática de esconder os detalhes internos de um objeto e expor apenas o que é necessário através de uma interface pública.
// Ex:

class Pessoa {
    #nome;
    constructor(nome, idade) {
        this.#nome = nome;
        this.idade = idade;
    }
    getNome() {
        return this.#nome;
    }
    setNome(nome) {
        this.#nome = nome;
    }
}

const pessoa = new Pessoa('João', 30);
console.log(pessoa.getNome());
pessoa.setNome('Maria');
console.log(pessoa.getNome());

// Herança:

// Permite que uma classe (subclasse) herde as propriedades e métodos de outra classe (superclasse), promovendo o reuso de código.
// Ex:

class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    fazerSom() {
        console.log(this.nome);
    }
}

class Cachorro extends Animal {
    constructor(nome, raca) {
        super(nome);
        this.raca = raca;
    }
    fazerSom() {
        console.log(this.nome);
    }
}

const cachorro = new Cachorro('Rex', 'Labrador');
cachorro.fazerSom();

// Polimorfismo:

// Permite que métodos com o mesmo nome em classes diferentes sejam usados de maneira intercambiável, cada um agindo conforme a classe específica.
// Ex:
    
class Veiculo {
    mover() {
        console.log('O veículo está se movendo.');
    }
}
class Carro extends Veiculo {
    mover() {
        console.log('O carro está dirigindo.');
    }
}
class Bicicleta extends Veiculo {
    mover() {
        console.log('A bicicleta está pedalando.');
    }
}
const veiculos = [new Carro(), new Bicicleta()];
veiculos.forEach((veiculo) => {
    veiculo.mover();
});