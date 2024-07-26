document.querySelector('#bnt').addEventListener('click', () =>{
    let n = document.querySelector('#input').value;
    let tab = 0
    while(tab <10){
        tab++
        let res = n*tab
        console.log(res)
    }
})