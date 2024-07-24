function reverterFrase(frase){
    let separaFrase = frase.split(" ");
    let inverteFrase = separaFrase.reverse();
    let juntarFrase = inverteFrase.join(" ");
    return juntarFrase;
}
let frase = "ola mundo";
let juntarFrase = reverterFrase(frase);
console.log(juntarFrase);