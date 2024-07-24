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
