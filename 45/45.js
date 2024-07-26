document.querySelector('#btn').addEventListener('click', () => {
    let n = parseInt(document.querySelector('#input').value);
    const fibonacci = (n) => {
        let fib = [0, 1];
        for (let i = 2; i < n; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }
        if (n === 1) {
            fib = [0];
        }
        return fib.slice(0, n);
    }
    console.log(fibonacci(n));

});
