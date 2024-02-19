const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
};

const { key } = lastTest;        // Asigna el valor de la propiedad 'key' a la variable 'key'
const { secondKey } = lastTest;  // Asigna el valor de la propiedad 'secondKey' a la variable 'secondKey'
const [, willThisWork] = secondKey; // Ignora el primer elemento de 'secondKey'y asigna el segundo a 'willThisWork'

console.log(key);               // Muestra en consola: value
console.log(secondKey);         // Muestra en consola: [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]);      // Muestra en consola: 1
console.log(willThisWork);      // Muestra en consola: 5

