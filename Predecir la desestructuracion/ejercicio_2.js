var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// Después del hoisting por el intérprete
// var needle;
// function test() {
//     var needle;
//     console.log(needle); // muestra en consola: undefined
// }
// needle = 'haystack';
// test();
