// Programa:
// Quiero crear objetos de productos tipo mercado libre.
// Con nombre, id de item, precio, e imagen.
// Funcion: Cuando apretas el boton + suma el precio al carrito.
// Cuando apretas el menos, lo borra.
// Si en el carrito ya no hay más productos del que estas borrando, se desabilita el boton del menos.

// Aclaración: El programa funciona en la parte de abajo donde no está comentado. Cada comentario fueron etapas
// que se fueron realizando para llegar al código optimizado. Y me sirve para mi para entender mi proceso. Por eso
// lo dejo.

// Etapa 1: Creación objetos sin función constructora

// const producto1 = {
//   id: 001,
//   nombre: "Monitor gamer benq",
//   precio: 519000,
//   imagen: "https:dfslksdf",
// };

// const producto2 = {
//   id: 002,
//   nombre: "Monitor gamer DFD ",
//   precio: 65700,
//   imagen: "https:dfsxczsdf",
// };

// const producto3 = {
//   id: 003,
//   nombre: "Monitor gamer aad",
//   precio: 435900,
//   imagen: "https:dweqaq",
// };

// const productos = [producto1, producto2, producto3];
// console.log(productos[0].nombre);
// console.log(productos[2].id);

// -----------------------------------------------------------

//Etapa 2: Creación objetos CON función constructora (clase)

// class Producto {
//   constructor(p) {
//     this.id = p.id;
//     this.nombre = p.nombre;
//     this.precio = p.precio;
//     this.imagen = p.imagen;
//   }
// }

// const producto1 = new Producto({
//   id: 001,
//   nombre: "Monitor gamer benq",
//   precio: 519000,
//   imagen: "https:dfslksdf",
// });

// const producto2 = new Producto({
//   id: 002,
//   nombre: "Monitor gamer DFD ",
//   precio: 65700,
//   imagen: "https:dfsxczsdf",
// });

// const producto3 = new Producto({
//   id: 003,
//   nombre: "Monitor gamer aad",
//   precio: 435900,
//   imagen: "https:dweqaq",
// });

// const productos = [producto1, producto2, producto3];

// //Solo para verificar, no sirve para nada del programa:
// //un console.log para ver si me toma las claves y los valores de cada objeto del array

// for (const item in productos) {
//   console.log(`En la posición ${item} de la lista de productos estan: `);
//   console.log(`Los siguientes atributos con sus valores: `);

//   for (const clave in productos[item]) {
//     console.log(`${clave} `);
//     console.log(`${productos[item][clave]}`);
//   }
// }

// -----------------------------------------------------------

//Etapa 3: Optimizando código en la creación de los objetos. (no ponemos "nombre, precio, imagen, id" en cada creación de cada objeto)

class Producto {
  constructor(id, nombre, precio, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
  }
}

const producto1 = new Producto(
  001,
  "Monitor gamer benq",
  519000,
  "https:dfslksdf"
);

const producto2 = new Producto(
  002,
  "Monitor gamer DFD",
  65700,
  "https:dfsxczsdf"
);

const producto3 = new Producto(
  003,
  "Monitor gamer aad",
  435900,
  "https:dweqaq"
);

const productos = [producto1, producto2, producto3];

//Solo para verificar, no sirve para nada del programa:
//un console.log para ver si me toma las claves y los valores de cada objeto del array

for (const item in productos) {
  console.log(`En la posición ${item} de la lista de productos estan: `);
  console.log(`Los siguientes atributos con sus valores: `);

  for (const clave in productos[item]) {
    console.log(`${clave} `);
    console.log(`${productos[item][clave]}`);
  }
}

// -----------------------------------------------------------

//Etapa 4: Agregamos los métodos de Agregar al carrito, Sacar del Carrito, SumaTotal
// // PREGUNTA. Es necesario tomar CADA boton de forma individual por su ID? Gracias!
// En la clase del 20-05-2023 vimos que se pueden tomar multiples inputs con e.target.children en un mismo formulario, pero en este html
// estos botones forman parte de distintos formularios porque estan en distintos divs y distintas secciones. En este caso es necesario tomar
// CADA boton de forma individual por su ID? Gracias!

let button_agregarAlCarrito_Producto1 = document.getElementById(
  "index__button_agregar-al-carrito-p1"
);
let button_sacarDelCarrito_Producto1 = document.getElementById(
  "index__button_sacar-del-carrito-p1"
);
let button_agregarAlCarrito_Producto2 = document.getElementById(
  "index__button_agregar-al-carrito-p2"
);
let button_sacarDelCarrito_Producto2 = document.getElementById(
  "index__button_sacar-del-carrito-p2"
);
let button_agregarAlCarrito_Producto3 = document.getElementById(
  "index__button_agregar-al-carrito-p3"
);
let button_sacarDelCarrito_Producto3 = document.getElementById(
  "index__button_sacar-del-carrito-p3"
);

// // Segunda pregunta: No encuentro una mejor forma de optimizar las funciones pero sé que las hay, como se podría hacer? Gracias.

let total = 0;

const operaciones = (op, prod) => {
  if (op === "sumar") {
    total += prod;
  } else if (op === "restar") {
    total -= prod;
  }
  alert(total);
  return total;
};

//Tercera pregunta (respondida): Porque se hace "const operaciones" y NO "function operaciones"?? No entiendo porque las funciones se guardan un variables. Gracias.
//Respuesta por comentarios en la clase
//Hola Dylan, es mucho mejor guardar en una const la arrow function de esta forma evitamos que pueda ser modificada por error o reutilizado su nombre de la function.

button_agregarAlCarrito_Producto1.addEventListener("click", () =>
  operaciones("sumar", producto1.precio)
);

button_agregarAlCarrito_Producto2.addEventListener("click", () =>
  operaciones("sumar", producto2.precio)
);
button_agregarAlCarrito_Producto3.addEventListener("click", () =>
  operaciones("sumar", producto3.precio)
);
button_sacarDelCarrito_Producto1.addEventListener("click", () =>
  operaciones("restar", producto1.precio)
);
button_sacarDelCarrito_Producto2.addEventListener("click", () =>
  operaciones("restar", producto2.precio)
);
button_sacarDelCarrito_Producto3.addEventListener("click", () =>
  operaciones("restar", producto3.precio)
);

// -----------------------------------------------------------

//Etapa 5: Agregamos el método de "Desabilitar el Boton de Sacar del Carrito" cuando no haya más de ese producto para Sacar del Carrito.

// Para esta entrega no llegué a eso, al método "Desabilitar el Boton de Sacar del Carrito". Lo estoy pensando como
// con la creación de un objeto llamado carrito que tenga cada producto con una storage. Y cuando se apreta el boton AÑADIR
// se le suma uno al producto1 del objeto carrito. Y al momento de desabilitar o habilitar el boton lo quiero hacer preguntando
// si el producto1 tiene valor mayor a 1. (Para saber que el usuario va a querer eliminar un producto que ya añadió, y no un producto
// que está sin añadir).

//Gracias!
