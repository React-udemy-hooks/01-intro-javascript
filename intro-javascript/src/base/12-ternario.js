
console.log("Hola Mundo");


// forma clásica

const activo = true;

let mensaje = 'hola';

if (activo) {
  mensaje = 'Activo'
} else {
  mensaje = 'Incativo'
}

console.log(mensaje)

// Ternario

const mensaj = (activo) ? 'Activo' : 'Inactivo'

console.log(mensaj)

const mens1 = (activo === true) && 'Activo'
const mens = activo && 'Activo'
console.log(mens)