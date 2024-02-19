var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// Después del hoisting por el intérprete
// var food;
// function eat() {
//     var food;
//     food = 'half-chicken';
//     console.log(food); // muestra en consola: half-chicken
//     food = 'gone';
// }
// food = 'chicken';
// console.log(food); // muestra en consola: chicken
// eat();

