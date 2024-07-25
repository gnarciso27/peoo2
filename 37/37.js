function verificarPalindromo(str) {
   
    let stringLimpa = str.replace(/[\W_]/g, '').toLowerCase();
  
    
    let stringReversa = stringLimpa.split('').reverse().join('');
  
   
    return stringLimpa === stringReversa;
  }
  
  
  console.log(verificarPalindromo("A man, a plan, a canal, Panama")); 
  console.log(verificarPalindromo("racecar"));                        
  console.log(verificarPalindromo("hello"));                          
  console.log(verificarPalindromo("Was it a car or a cat I saw"));    
  