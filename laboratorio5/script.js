// 1.1.
console.log("\n### 1.1. z");

const inventario = [
    ["Puerta ", 15, 85.50],
    ["Maceta", 5, 499.99],
    ["Linterma", 222, 35.9]
];

console.log("Resultado :", inventario);


// 1.2
console.log("\n### 1.2. ");


const producto2 = inventario[1];
const nombreProducto2 = producto2[0]; 
const precioProducto2 = producto2[2];  

console.log(`Nombre del (índice 1): ${nombreProducto2}`);
console.log(`Precio de ${nombreProducto2}: ${precioProducto2}`);

//length
const numFilas = inventario.length;
const numElementosFila1 = inventario[0].length;

console.log(`Número total  productos: ${numFilas}`);
console.log(`Número de elementos en la primera fila: ${numElementosFila1}`);


// 1.3
console.log("\n### 1.3.");

for (let i = 0; i < inventario.length; i++) {
    const numeroElemento = i + 1;
    const nombre = inventario[i][0]; 
    console.log(`Elemento ${numeroElemento}: Nombre del producto: ${nombre}`);
}


console.log("\n## 2. Ejercicios  ⚙️");
console.log("-------------------------------------------------");


// 2.1.
console.log("\n### 2.1 ");

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

console.log("Función invocada:");
console.log(`El valor total del inventario es ${valorTotalInventario.toFixed(2)} €`);


// 2.2
console.log("\n### 2.2. ");

const ordenarPorPrecio = function(a, b) {
    return a[2] - b[2];
};

inventario.sort(ordenarPorPrecio);

console.log("Resultado (Inventario ordenado por precio Ascendente):", inventario);

