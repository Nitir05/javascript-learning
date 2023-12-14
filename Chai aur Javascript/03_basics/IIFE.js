// Immediately Invoked Function Expressions (IIFE)
//IIFE are used to avoid the pollution of global scope variables

(function chai() {
  //named IIFE
  console.log(`DB Connected`);
})(); //semicolon needs to used to end the function

((name) => {
  //unnnamed IIFE
  console.log(`Hello ${name}`);
})("Nitin");
