

function prueba() {
    if (true) {
        let numero = 10;
        var variable = "aaron";
        const PI = 3.1416;
        console.log(variable);
        console.log(numero);
        console.log(PI);

        // Ala  hora de querer usar de nuevo let 
        // sale error al querer redeclarar la variable con let
        // saldra error ala hora de ejecutar el codigo
        // un ejemplo seria: let numero = 11; 

    }
}

prueba();

// No son accesibles fuera de la función prueba:
// console.log(variable);
// console.log(numero);  
// console.log(PI);      

function prueba2() {
    console.log(variable);
    console.log(numero);   
    console.log(PI);      
} 
prueba2();



/*4. Escribe un pequeño informe en comentarios que explique:

 1 ¿Qué es hoisting y cómo afecta a var?
 el hosting es un como poner un valor igual en cada uno por
 ejemplo un let numero = 5  y volver a poner let numero = 6 el codigo no funcionara ya que se estan volviendo a declarar la misma variable let con el mismo nombre

 2 ¿Qué diferencias de alcance existen entre var, let y const?
 el let y la const solo tiene  un alcanse dentre de una funciion o bloque en cambio el var puede ser llamado desde culquier parte del codigo

 3 ¿Qué significa que const no permite reasignación pero sí permite mutar
 objetos/arrays? (demuéstralo con código).

 Que ala hora de poner un valor a una variable const no se puede volver a poner otro valor   
 pero si se puede cambiar el valor de un objeto que esta dentro de un const
*/


