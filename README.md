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

    Herança
    Este é o pilar mais clássico de todos. A herança ocorre quando uma classe herda atributos e métodos de uma ou mais classes. Assim, ela pode se dividir em 2 tipos:

    Herança simples: classe herda atributos e métodos de apenas uma classe.

    Herança múltipla: classe herda atributos e métodos de duas ou mais classes.

    Referência bibliográfica:https://www.estrategiaconcursos.com.br/blog/heranca-polimorfismo-programacao-orientada-objetos/


3. Quais são as principais diferenças entre esses paradigmas? Forneça exemplos  de aplicação para cada um, destacando suas vantagens e desvantagens.



4. Explique os conceitos básicos da programação funcional. Quais são suas  características e vantagens? Forneça exemplos em JavaScript. 



5. Descreva o que é a programação lógica e onde ela é mais comumente utilizada.  Dê exemplos de como seria aplicada em JavaScript. 



6. Explique o que é e como funciona a programação orientada a eventos. Dê  exemplos de onde é utilizada em JavaScript. 



7. O que são padrões de projeto? Explique a importância de utilizar padrões de projeto na programação com exemplos em JavaScript. 



8. Descreva alguns dos principais padrões de projeto utilizados em JavaScript,  como o padrão Singleton, Módulo, Observer e Factory, com exemplos de  implementação.



9. O que são antipadrões? Dê exemplos de antipadrões comuns em JavaScript,  como variáveis globais excessivas e funções anônimas não nomeadas, e  explique por que eles devem ser evitados. 



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