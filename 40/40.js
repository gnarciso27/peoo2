function anobissexto(){
    const ano = document.querySelector('#ano').value;
    if(ano %4 === 0){
        console.log('esse ano é bissexto')
    }else{
        console.log('esse ano não é bissexto')
    }
}