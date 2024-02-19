console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        // Aquí hay un problema, ya que no se puede reasignar un valor a una constante (dojo).
        // Debería ser dojo.status = "closed for now" o usar let en lugar de const.
        dojo = "closed for now";
    }
    return dojo;
}
// Después del hoisting por el intérprete
// console.log(makeDojo("Chicago", 65)); // muestra en consola: { name: 'Chicago', students: 65, hiring: true }
// console.log(makeDojo("Berkeley", 0)); // Error: Assignment to constant variable.
// function makeDojo(name, students){
//     const dojo;
//     dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }
