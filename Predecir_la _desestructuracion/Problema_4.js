const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers;      // Ignora el primer elementoy asigna el segundo a 'first'
const [,,, second] = numbers;   // Ignora los primeros tres elementos y asigna el cuarto a 'second'
const [,,,,,,,, third] = numbers; // Ignora los primeros ocho elementos y asigna el noveno a 'third'

console.log(first == second);   // Muestra en consola: false (2 no es igual a 5)
console.log(first == third);    // Muestra en consola: true (2 es igual a 2)
