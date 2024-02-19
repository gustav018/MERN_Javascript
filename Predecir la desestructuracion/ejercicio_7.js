dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// Después del hoisting por el intérprete
// dojo = "san jose";
// console.log(dojo); // muestra en consola: san jose
// learn();
// function learn() {
//     var dojo;
//     dojo = "seattle";
//     console.log(dojo); // muestra en consola: seattle
//     dojo = "burbank";
//     console.log(dojo); // muestra en consola: burbank
// }
// console.log(dojo); // muestra en consola: burbank
