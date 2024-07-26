// Os padrões de projeto são soluções reutilizáveis para problemas comuns que ocorrem na construção de software. Eles representam boas práticas desenvolvidas e refinadas por muitos programadores ao longo do tempo e ajudam a construir sistemas de software robustos, escaláveis e fáceis de manter.
//     A importâmcia dos padrões de projeto é que facilita a reutilização de soluções comprovadas, fornece uma linguagem comum para desenvolvedores discutirem problemas de design e suas soluções, torna o código mais legível e compreensível e 
//     ajuda a criar sistemas que são mais fáceis de modificar e escalar conforme as necessidades mudam.
//     Ex:

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