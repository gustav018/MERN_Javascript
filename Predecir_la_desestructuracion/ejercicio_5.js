mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// Después del hoisting por el intérprete
// var mean;
// mean(); // TypeError: mean is not a function
// console.log(food); // ReferenceError: food is not defined
// mean = function() {
//     var food;
//     food = "chicken";
//     console.log(food); // muestra en consola: chicken
//     food = "fish";
//     console.log(food); // muestra en consola: fish
// }
// console.log(food); // ReferenceError: food is not defined
