class Pais {
    constructor(nombre, poblacion, area) {
        this.nombre = nombre;
        this.poblacion = poblacion;
        this.area = area;
        this.ciudades = []
    }

    incrementarPoblacion(cantidad) {
        this.poblacion += cantidad;
        return this.poblacion;
    }

    densidad() {
        let densidadPais = this.poblacion / this.area;
        return densidadPais;
    }

    compararArea(otroPais) {
        return (this.area > otroPais.area)
            ? `${this.nombre} es mas grande que ${otroPais.nombre}`
            : `${otroPais.nombre} es mas grande que ${this.nombre}`;
    }

    mostrarCiudades() {
        console.log(`Ciudades de ${this.nombre}:`);
        for (let ciudad of this.ciudades) {
            console.log(ciudad);
        }
    }


    mostrarCiudadesPorLetra() {
        console.log(`Letras de las ciudades de ${this.nombre}:`);
        for (let ciudad of this.ciudades) {
            for (let letra of ciudad) {
                console.log(letra);
            }
        }
    }
}
console.log("Prueba de la clase:");
let pais1 = new Pais("Españita", 50000, 2780400);
let pais2 = new Pais("Brasil", 21000, 1234567);
let pais3 = new Pais("Rusia", 545000, 9876543);

pais1.ciudades.push("Madrid", "Barcelona", "Valencia");
pais2.ciudades.push("Sao Paulo", "Rio de Janeiro", "Brasilia");
pais3.ciudades.push("Moscu", "San Petersburgo", "Kazán");

console.log("1. incrementarPoblacion");
console.log("-------------------------");
console.log("Entrada: 00000");
console.log("-------------------------");
console.log("Salida esperada:");
console.log("-------------------------");
console.log("Pais 1 ")
console.log("pais 1 antes:", pais1.poblacion);
console.log("despues de incrementar");
console.log("Resultado:", pais1.incrementarPoblacion(100000));
console.log("-------------------------");
console.log("Pais 2 ")
console.log("pais 2 antes:", pais2.poblacion);
console.log("despues de incrementar");
console.log("Resultado:", pais2.incrementarPoblacion(50000));
console.log("-------------------------");
console.log("Pais 3 ")
console.log("pais 3 antes:", pais3.poblacion);
console.log("despues de incrementar");
console.log("Resultado:", pais3.incrementarPoblacion(99999));
console.log("-------------------------");

console.log("2. densidad");
console.log("-------------------------");
console.log("Pais 1 ")
console.log("Resultado:", pais1.densidad());
console.log("-------------------------");
console.log("Pais 2 ")
console.log("Resultado:", pais2.densidad());
console.log("-------------------------");
console.log("Pais 3 ")
console.log("Resultado:", pais3.densidad());
console.log("-------------------------");


console.log("3. compararArea");
console.log("-------------------------");
console.log("Compara entre pais 1 y pais 2");
console.log("Resultado:", pais1.compararArea(pais2));
console.log("-------------------------");
console.log("Compara entre pais 3 y pais 1");
console.log("Resultado:", pais3.compararArea(pais1));
console.log("-------------------------");
console.log("Compara entre pais 2 y pais 3");
console.log("Resultado:", pais2.compararArea(pais3));
console.log("-------------------------");

console.log("4. mostrarCiudades");
console.log("-------------------------");
pais1.mostrarCiudades();
console.log("-------------------------");
pais2.mostrarCiudades();
console.log("-------------------------");
pais3.mostrarCiudades();
console.log("-------------------------");

console.log("5 mostrar por letras ");
console.log("-------------------------");
pais1.mostrarCiudadesPorLetra();
console.log("-------------------------");
pais2.mostrarCiudadesPorLetra();
console.log("-------------------------");
pais3.mostrarCiudadesPorLetra();