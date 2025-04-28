// 1. Variables básicas
let nombre = "Andrés";
let edad = 26;
let tieneMascotas = false;

console.log(nombre);
console.log(edad);
console.log(tieneMascotas);

// 2. Operaciones numéricas
let num1 = 10;
let num2 = 5;

console.log("Suma:", num1 + num2);
console.log("Resta:", num1 - num2);
console.log("Multiplicación:", num1 * num2);
console.log("División:", num1 / num2);

// 3. Función que saluda
function saludar(nombre) {
  return `¡Hola, ${nombre}!`;
}

console.log(saludar("María"));

// 4. Array de frutas con for
let frutas = ["manzana", "banana", "naranja", "uva", "mango"];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// 5. Multiplicar números por 2 usando map
let numeros = [1, 2, 3];
let numerosPorDos = numeros.map(num => num * 2);

console.log(numerosPorDos);

// 6. Array de objetos y mostrar nombres
let personas = [
  { nombre: "Ana", edad: 20 },
  { nombre: "Luis", edad: 25 },
  { nombre: "Carla", edad: 30 }
];

personas.forEach(persona => {
  console.log(persona.nombre);
});

// 7. Filter para números mayores a 5
let numerosGrandes = [2, 7, 4, 9, 6];

let mayoresA5 = numerosGrandes.filter(num => num > 5);

console.log(mayoresA5);

// 8. Reduce para suma total
let valores = [1, 2, 3, 4, 5];

let sumaTotal = valores.reduce((acumulador, valor) => acumulador + valor, 0);

console.log("Suma total:", sumaTotal);

// 9. Función asincrónica
async function mensajeAsync() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return "¡Han pasado 2 segundos!";
}

async function mostrarMensaje() {
  const mensaje = await mensajeAsync();
  console.log(mensaje);
}

mostrarMensaje();