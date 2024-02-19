const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
};

const { name: otherName } = employee;

console.log(name);       // Error: name is not defined (ya que name no está definido)
console.log(otherName);   // Muestra en consola: Elon
