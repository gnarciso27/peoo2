document.querySelector("#bnt").addEventListener('click', ()=>{
    let x = 0
    for (let i = 1; i <= 100; i++) {
        x += i;
    }
    console.log(x)
})
