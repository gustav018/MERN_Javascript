console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// Después del hoisting por el intérprete
// var genre;
// console.log(genre); // muestra en consola: undefined
// genre = "disco";
// rewind();
// function rewind() {
//     var genre;
//     genre = "rock";
//     console.log(genre); // muestra en consola: rock
//     genre = "r&b";
//     console.log(genre); // muestra en consola: r&b
// }
// console.log(genre); // muestra en consola: disco
