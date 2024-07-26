// Funções Puras:
//     Funções que, para a mesma entrada, sempre retornam a mesma saída e não têm efeitos colaterais.
//     Ex:

        const soma = (a, b) => a + b;
        console.log(soma(2, 3));

    // Imutabilidade:
    // Cópias de dados são criadas com as mudanças necessárias.
    // Ex:

        const lista = [1, 2, 3];
        const novaLista = [...lista, 4];
        console.log(lista);
        console.log(novaLista)
    
    // Funções de Alta Ordem:
    // Funções que podem receber outras funções como argumentos ou retorná-las.
    // Ex:

        const aplicarOperacao = (operacao, a, b) => operacao(a, b);
        const multiplicar = (a, b) => a * b;
        console.log(aplicarOperacao(multiplicar, 5, 3));


    // Composição de Funções:
    // Combinação de funções simples para construir funções mais complexas.
    // Ex:

        const somar = (a) => a + 1;
        const dobrar = (a) => a * 2;
        const somarEDobrar = (a) => dobrar(somar(a));
        console.log(somarEDobrar(3));

    // Recursão:
    // Preferência pelo uso de recursão em vez de loops para iterar sobre dados.
    // Ex:

        const fatorial = n => (n === 0 ? 1 : n * fatorial(n - 1));
        console.log(fatorial(5)); // 120

    // Referência Bibliográfica:https://blog.betrybe.com/tecnologia/programacao-funcional/