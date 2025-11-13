// 1.1.
console.log("\n### 1.1. Creación de una Matriz");
console.log("Lo que voy a imprimir: La matriz 'inventario' definida.");

const inventario = [
    ["Teclado ", 15, 85.50],
    ["Monitor ", 5, 499.99],
    ["Mouse ", 22, 35.00]
];

console.log("Resultado (Inventario Creado):", inventario);


// 1.2
console.log("\n### 1.2. Acceso y Propiedad length");
console.log("Lo que voy a imprimir: Nombre y precio del 2do producto, y longitud de la matriz.");

const producto2 = inventario[1];
const nombreProducto2 = producto2[0]; 
const precioProducto2 = producto2[2];  

console.log(`Nombre del producto en la segunda fila (índice 1): ${nombreProducto2}`);
console.log(`Precio de ${nombreProducto2}: ${precioProducto2}`);

//length
const numFilas = inventario.length;
const numElementosFila1 = inventario[0].length;

console.log(`Número total de filas (productos): ${numFilas}`);
console.log(`Número de elementos en la primera fila: ${numElementosFila1}`);


// 1.3
console.log("\n### 1.3. Recorrido Simple");
console.log("Lo que voy a imprimir: Número de elemento y nombre de cada producto.");

for (let i = 0; i < inventario.length; i++) {
    const numeroElemento = i + 1;
    const nombre = inventario[i][0]; 
    console.log(`Elemento ${numeroElemento}: Nombre del producto: ${nombre}`);
}


console.log("\n## 2. Ejercicios  ⚙️");
console.log("-------------------------------------------------");


// 2.1.
console.log("\n### 2.1. Función para Cálculo de Inventario");

function calcularValorTotal(matrizInventario) {
    let valorTotal = 0;
    for (let i = 0; i < matrizInventario.length; i++) {
        const cantidad = matrizInventario[i][1]; 
        const precio = matrizInventario[i][2];  
        valorTotal += cantidad * precio;
    }
    return valorTotal;
}

const valorTotalInventario = calcularValorTotal(inventario);

console.log("Función invocada: calcularValorTotal(inventario)");
console.log("Entrada: La matriz de inventario.");
console.log(`Resultado: El valor total del inventario es ${valorTotalInventario.toFixed(2)} €`);


// 2.2
console.log("\n### 2.2. ");
console.log("Función invocada: inventario.sort(ordenarPorPrecio)");

const ordenarPorPrecio = function(a, b) {
    return a[2] - b[2];
};

inventario.sort(ordenarPorPrecio);

console.log("Resultado (Inventario ordenado por precio Ascendente):", inventario);

