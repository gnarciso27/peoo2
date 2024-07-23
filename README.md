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

const x = 1;
while(x<=100){
    x ++
    console.log(x)
}
