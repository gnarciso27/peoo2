//1. Explique os princípios da programação estruturada e como ela organiza o código. Forneça exemplos em JavaScript. 

    Os princípios da programação estruturada são: Sequência, Seleção, Iteração, Modularização.
    A sequência são as instruções são executadas na ordem em que aparecem.
    Ex:

        const a = 10;
        const b = 20;
        const c = a + b;
        console.log(c);

    A seleção é quando o programa tome decisões com base em condições(if, else e else if).
    Ex:

        let idade = 18;

        if (idade < 18) {
            console.log('Menor de idade');
        } else if (idade >= 18 && idade < 60) {
            console.log('Adulto');
        } else {
            console.log('Idoso');
        }

    A iteração é quando o programa repete um conjunto de instruções(for e while).
    Ex:

        for (let i = 0; i < 5; i++) {
            console.log(i);
        }

        <!-- ou -->

        let x = 0;
        while (x < 5) {
            console.log(x);
            x++;
        }

    E por ultimo a modulação que envolve a divisão do código em funções ou módulos que podem ser reutilizados.
    Ex:

        function soma(a, b) {
            return a + b;
        }
        console.log(soma(10, 5))
        console.log(soma(20, 30))

//2. Explique os princípios da POO, como encapsulamento, herança e polimorfismo.  Dê exemplos em JavaScript. 

    Encapsulamento:

    Refere-se à prática de esconder os detalhes internos de um objeto e expor apenas o que é necessário através de uma interface pública.
    Ex:

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

    Herança:

    Permite que uma classe (subclasse) herde as propriedades e métodos de outra classe (superclasse), promovendo o reuso de código.
    Ex:

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

    Polimorfismo:

    Permite que métodos com o mesmo nome em classes diferentes sejam usados de maneira intercambiável, cada um agindo conforme a classe específica.
    Ex:
        
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

//3. Quais são as principais diferenças entre esses paradigmas? Forneça exemplos  de aplicação para cada um, destacando suas vantagens e desvantagens.

    Características:

    Encapsulamento: Esconder detalhes internos e expor apenas interfaces públicas.
    Herança: Criar novas classes a partir de classes existentes.

    Polimorfismo: Usar métodos com o mesmo nome de maneira intercambiável.

    Abstração: Representar conceitos complexos de forma simplificada.

    Vantagens:

    Facilita a modelagem de sistemas complexos baseados em objetos do mundo real.
    Promove a reutilização de código através de herança e composição.
    Encapsulamento ajuda na proteção e manutenção do estado interno dos objetos.

    Desvantagens:

    Pode ser mais complexo e verboso, especialmente para pequenas aplicações.
    Herança múltipla pode levar a um código difícil de entender e manter (apesar do uso de interfaces e composição como alternativas).

//4. Explique os conceitos básicos da programação funcional. Quais são suas  características e vantagens? Forneça exemplos em JavaScript. 

    Funções Puras:
    Funções que, para a mesma entrada, sempre retornam a mesma saída e não têm efeitos colaterais.
    Ex:

        const soma = (a, b) => a + b;
        console.log(soma(2, 3));

    Imutabilidade:
    Cópias de dados são criadas com as mudanças necessárias.
    Ex:

        const lista = [1, 2, 3];
        const novaLista = [...lista, 4];
        console.log(lista);
        console.log(novaLista)
    
    Funções de Alta Ordem:
    Funções que podem receber outras funções como argumentos ou retorná-las.
    Ex:

        const aplicarOperacao = (operacao, a, b) => operacao(a, b);
        const multiplicar = (a, b) => a * b;
        console.log(aplicarOperacao(multiplicar, 5, 3));


    Composição de Funções:
    Combinação de funções simples para construir funções mais complexas.
    Ex:

        const somar = (a) => a + 1;
        const dobrar = (a) => a * 2;
        const somarEDobrar = (a) => dobrar(somar(a));
        console.log(somarEDobrar(3));

    Recursão:
    Preferência pelo uso de recursão em vez de loops para iterar sobre dados.
    Ex:

        const fatorial = n => (n === 0 ? 1 : n * fatorial(n - 1));
        console.log(fatorial(5)); // 120

    Referência Bibliográfica:https://blog.betrybe.com/tecnologia/programacao-funcional/

//5. Descreva o que é a programação lógica e onde ela é mais comumente utilizada.  Dê exemplos de como seria aplicada em JavaScript. 

    A programação lógica é um paradigma de programação que se baseia na lógica formal para expressar programas. Em vez de especificar um conjunto de instruções imperativas, um programa lógico é uma coleção de declarações lógicas que descrevem fatos e regras sobre um problema. O programa é então consultado para encontrar soluções que satisfazem essas declarações.
    Ex:

    Definição de Fatos:

        const facts = [
            { parent: 'João', child: 'Ana' },
            { parent: 'João', child: 'Pedro' },
            { parent: 'Maria', child: 'Ana' },
            { parent: 'Maria', child: 'Pedro' },
            { parent: 'Pedro', child: 'Lucas' }
        ];

    Consulta de Parentesco:

        const findChildren = (parent) => {
            return facts
                .filter(fact => fact.parent === parent)
                .map(fact => fact.child);
        };
        console.log(findChildren('João'));

    Definição de Regras:

    
        const isGrandparent = (grandparent, grandchild) => {
            const children = findChildren(grandparent);
            for (const child of children) {
                if (findChildren(child).includes(grandchild)) {
                    return true;
                }
            }
            return false;
        };

        console.log(isGrandparent('João', 'Lucas')); 
        console.log(isGrandparent('Maria', 'Lucas')); 
        console.log(isGrandparent('Ana', 'Lucas')); 


//6. Explique o que é e como funciona a programação orientada a eventos. Dê  exemplos de onde é utilizada em JavaScript. 

    A programação orientada a eventos é um paradigma de programação no qual o fluxo do programa é determinado por eventos, ações ou ocorrências detectadas pelo programa. Esses eventos podem ser gerados pelo usuário, pelo sistema ou por outras partes do programa.
    Ex:

    Evento de Clique de Botão:

        <button id="bnt">Clique em mim</button>
        <script>
            const botao = document.getElementById('bnt');

            botao.addEventListener('click', () => {
                alert('Botão clicado!');
            });
        </script>

    Evento de Input em um Campo de Texto:

        <input type="text" id="meuInput" />
        <script>
            const input = document.getElementById('meuInput');

            input.addEventListener('input', (event) => {
                console.log(`Você digitou: ${event.target.value}`);
            });
        </script>

//7. O que são padrões de projeto? Explique a importância de utilizar padrões de projeto na programação com exemplos em JavaScript. 

    Os padrões de projeto são soluções reutilizáveis para problemas comuns que ocorrem na construção de software. Eles representam boas práticas desenvolvidas e refinadas por muitos programadores ao longo do tempo e ajudam a construir sistemas de software robustos, escaláveis e fáceis de manter.
    A importâmcia dos padrões de projeto é que facilita a reutilização de soluções comprovadas, fornece uma linguagem comum para desenvolvedores discutirem problemas de design e suas soluções, torna o código mais legível e compreensível e 
    ajuda a criar sistemas que são mais fáceis de modificar e escalar conforme as necessidades mudam.
    Ex:

        const Meumodulo = (() => {
            let privateVariable = 'privado';

            function privateMethod() {
                console.log(privateVariable);
            }

            return {
                publicMethod: () => {
                    privateMethod();
                },
            };
        })();

        Meumodulo.publicMethod(); 
        console.log(Meumodulo.privateVariable);

//8. Descreva alguns dos principais padrões de projeto utilizados em JavaScript,  como o padrão Singleton, Módulo, Observer e Factory, com exemplos de  implementação.

    Singleton

    O padrão Singleton assegura que uma classe tenha apenas uma instância e fornece um ponto de acesso global a essa instância.

    Factory

    O padrão Factory fornece uma interface para criar objetos em uma superclasse, mas permite que subclasses alterem o tipo de objetos que serão criados.

     Observer

    O padrão Observer define uma dependência um-para-muitos entre objetos, de modo que quando um objeto muda de estado, todos os seus dependentes são notificados e atualizados automaticamente.

    Módulo

    O padrão Module permite organizar e encapsular código, facilitando a manutenção e a prevenção de conflitos de variáveis globais.

//9. O que são antipadrões? Dê exemplos de antipadrões comuns em JavaScript,  como variáveis globais excessivas e funções anônimas não nomeadas, e  explique por que eles devem ser evitados. 

    Antipadrões são práticas de design de software que, embora possam parecer soluções rápidas ou fáceis, geralmente levam a problemas maiores no futuro, como código difícil de manter, bugs, ou desempenho ruim. Eles representam exemplos do que não fazer ao escrever e organizar código.


//10. Explique o conceito de Document Object Model e como ele representa a estrutura de um documento HTML.

    O DOM (Document Object Model) representa a organização de todos os elementos que compõem uma página da web.
    O DOM é uma especificação fundamental para a padronização e organização dos elementos de uma página web. Desenvolvido pelo W3C, o DOM foi essencial para garantir a compatibilidade entre navegadores e plataformas, evitando cenários de incompatibilidade e confusão.


//11. Descreva a estrutura hierárquica do DOM e como os diferentes tipos de nós  (elementos, atributos, texto, etc.) se relacionam entre si.

    o DOM (Document Object Model) é uma representação hierárquica de um documento HTML. O DOM organiza os elementos de uma página web em uma estrutura hierárquica, formando uma árvore DOM. Esta árvore reflete a hierarquia e os relacionamentos pai-filho entre os elementos, facilitando a interação e localização dos mesmos.

    Referência Bibliográfica: https://www.escoladnc.com.br/blog/entendendo-o-dom-a-importancia-para-o-desenvolvimento-web/

// 39. Escreva uma função que receba uma nota (0-100) e retorne a letra
// correspondente (A, B, C, D, F) utilizando estruturas de decisão.

        function verificarnota() {
            const nota = parseInt(document.querySelector('#nota').value);
            if(nota >= 90){
                console.log('A')
            }else if(nota >= 80){
                console.log('B')
            }else if(nota >= 70){
                console.log('C')
            }else if(nota >= 60){
                console.log('D')
            }else{
                console.log('F')
            }
        }

// 40. Escreva uma função que determine se um ano é bissexto.

    function anobissexto(){
        const ano = document.querySelector('#ano').value;
        if(ano %4 === 0){
            console.log('esse ano é bissexto')
        }else{
            console.log('esse ano não é bissexto')
        }
    }

// 41. Escreva um programa que imprima todos os números de 1 a 50.

    document.querySelector('#bnt').addEventListener('click', () => {
        let x = 0;
        while(x<100){
            x ++
            console.log(x)
        }
    })

//  42. Escreva um programa que imprima os números pares de 1 a 100. 

    document.querySelector('#bnt').addEventListener('click', () => {
        let x = 0;
        while(x<100){
            x = x + 2
            console.log(x)
        }
    })
    
// 43. Escreva um programa que imprima a tabuada de um número fornecido pelo  usuário. 

    document.querySelector('#bnt').addEventListener('click', () =>{
        let n = document.querySelector('#input').value;
        let tab = 0
        while(tab <10){
            tab++
            let res = n*tab
            console.log(res)
        }
    })

// 44. Escreva um programa que calcule a soma de todos os números de 1 a 100.

    document.querySelector("#bnt").addEventListener('click', ()=>{
        let x = 0
        for (let i = 1; i <= 100; i++) {
            x += i;
        }
        console.log(x)
    })

// 45. Escreva um programa que receba um número 'n' e imprima os 'n' primeiros  números da sequência de Fibonacci. 

    document.querySelector('#btn').addEventListener('click', () => {
        let n = parseInt(document.querySelector('#input').value);
        const fibonacci = (n) => {
            let fib = [0, 1];
            for (let i = 2; i < n; i++) {
                fib[i] = fib[i - 1] + fib[i - 2];
            }
            if (n === 1) {
                fib = [0];
            }
            return fib.slice(0, n);
        }
        console.log(fibonacci(n));
    
    });

//46. Escreva um programa que encontre o maior número em um array de números utilizando um loop.

    function encontrarmaiornumero(array) {
        let maiornumero = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] > maiornumero) {
            maiornumero = array[i];
            }
        }
        return maiornumero;
    }

    const numeros = [3, 6, 2, 8, 5, 9, 1];
    const maiornumero = encontrarmaiornumero(numeros);
    console.log(maiornumero); 

//47. Escreva um programa que inverta um array utilizando um loop. 

    function inverterarray(array) {
        let inicio = 0;
        let fim = array.length - 1;
        while (inicio < fim) {
            let temp = array[inicio];
            array[inicio] = array[fim];
            array[fim] = temp;
            inicio++;
            fim--;
        }
        return array;
    }

//48. Escreva uma função que calcule o fatorial de um número. 

    function fatorial(n) {
        let fatorial = 1; 
        for (let i = 1; i <= n; i++) {
            fatorial *= i; 
        }
        return fatorial;
    }

//49. Escreva uma função que receba um array de números e retorne o maior número.
        
    function MaiorNumero(array) {
        if (array.length === 0) {
            return null; 
        }
        let maiorNumero = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] > maiorNumero) {
            maiorNumero = array[i];
            }
        }
        return maiorNumero;
    }


//50. Escreva uma função que receba um array de números e retorne a média dos  números. 

    function calcularMedia(array) {
        if (array.length === 0) {
            return null;
        }

        let soma = 0;

        for (let i = 0; i < array.length; i++) {
            soma += array[i];
        }
        let media = soma / array.length;
        return media;
    }

//51. Escreva uma função que receba uma string e conte quantas vogais ela possui.

    function contar(str) {
        const vogais = 'aeiouAEIOU';
        let contador = 0;
        for (let i = 0; i < str.length; i++) {
            if (vogais.includes(str[i])) {
                contador++;
            }
        }
        return contador;
    }