
console.log("Hola Mundo");
import { getHeroeById } from "./base/08.import";

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('2 segundos después')
    resolve();
  }, 2000)
});
promesa.then(() => {
  console.log('then de la promesa')
});

// tarea import getHeroeById

const promesa2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const heroe = getHeroeById(2)
    resolve(heroe)
  }, 2000);
});
promesa2.then((heroe) => {
  console.log("en el then", heroe);
});

// Manejando un error

const promesa3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const heroe = getHeroeById(2);
    resolve("no se pudo encontrar héroe");
  }, 2000);
});
promesa3.then((heroe) => {
  console.log("en el then", heroe);
}).catch((error)=>{console.warn(error)})


// enviando argumentos a la promesa

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject('no encontrado')
      }
    }, 2000);
  });
}

getHeroeByIdAsync(4).then((heroe) => {console.log('heroe', heroe)
}).catch(err => console.warn(err))