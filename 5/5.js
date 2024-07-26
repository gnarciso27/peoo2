// A programação lógica é um paradigma de programação que se baseia na lógica formal para expressar programas. Em vez de especificar um conjunto de instruções imperativas, um programa lógico é uma coleção de declarações lógicas que descrevem fatos e regras sobre um problema. O programa é então consultado para encontrar soluções que satisfazem essas declarações.
// Ex:

// Definição de Fatos:

    const facts = [
        { parent: 'João', child: 'Ana' },
        { parent: 'João', child: 'Pedro' },
        { parent: 'Maria', child: 'Ana' },
        { parent: 'Maria', child: 'Pedro' },
        { parent: 'Pedro', child: 'Lucas' }
    ];

// Consulta de Parentesco:

    const findChildren = (parent) => {
        return facts
            .filter(fact => fact.parent === parent)
            .map(fact => fact.child);
    };
    console.log(findChildren('João'));

// Definição de Regras:


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