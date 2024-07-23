function produtoMaisCaro(produtos){
    if (produtos.length === 0){
        return null
    }
    let maisCaro = produtos[0];
    for(let i = 1; i < produtos.length; i++){
        if (produtos[i].preco > maisCaro.preco){
            maisCaro = produtos[i];
        }
    }
    return maisCaro;
}
const produtos = [
    {nome : 'a',preco :10},
    {nome : 'b',preco :30},
    {nome : 'c',preco :25},
    {nome : 'd',preco : 15},
]
const maisCaro = produtoMaisCaro(produtos);
console.log(maisCaro);