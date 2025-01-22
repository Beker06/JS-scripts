// Un set es una estructura de datos parecida 
// a una Lista o Un arreglo que representa una 
// coleccion de datos unicos con la caracteristica 
// de que no permite duplicados.

let mySet = new Set();

// Agregar elementos al set
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(2); // No se añadirá duplicado, ya que los sets solo permiten valores únicos

console.log(mySet); // SET(3) {1, 2, 3}

// Verificar si un elemento está presente en el set
console.log(mySet.has(2)); // Devuelve true

// Obtener el tamaño del set
console.log(mySet.size); // Devuelve 3

// Eliminar un elemento del set
mySet.delete(2);

// Iterar a través de los elementos del set
mySet.forEach((value) => {
    console.log(value);
});

// Convertir el set a un array
let arrayFromSet = Array.from(mySet);
console.log(arrayFromSet); // Devuelve [1, 3]