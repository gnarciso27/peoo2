//Os princípios da programação estruturada são: Sequência, Seleção, Iteração, Modularização.
//A sequência são as instruções são executadas na ordem em que aparecem.
//Ex:

    const a = 10;
    const b = 20;
    const c = a + b;
    console.log(c);

//A seleção é quando o programa tome decisões com base em condições(if, else e else if).
//Ex:

    let idade = 18;

    if (idade < 18) {
        console.log('Menor de idade');
    } else if (idade >= 18 && idade < 60) {
        console.log('Adulto');
    } else {
        console.log('Idoso');
    }

//A iteração é quando o programa repete um conjunto de instruções(for e while).
//Ex:

    for (let i = 0; i < 5; i++) {
        console.log(i);
    }

    <!-- ou -->

    let x = 0;
    while (x < 5) {
        console.log(x);
        x++;
    }

//E por ultimo a modulação que envolve a divisão do código em funções ou módulos que podem ser reutilizados.
//Ex:

    function soma(a, b) {
        return a + b;
    }
    console.log(soma(10, 5))
    console.log(soma(20, 30))