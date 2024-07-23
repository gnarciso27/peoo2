function inverterStr(str){
    const separaStr = str.split('');
    const reverteStr = separaStr.reverse();
    const juntarStr = reverteStr.join('');
    return juntarStr;
}
const StrTeste = 'Ola professor';
console.log(StrTeste);
console.log(inverterStr(StrTeste));