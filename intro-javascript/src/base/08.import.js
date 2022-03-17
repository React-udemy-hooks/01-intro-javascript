
console.log("Hola Mundo");


import heroes, { owners } from '../data/heroes'
// console.log(owners)

// console.log(heroes)

export const getHeroeById = (id) => {
  return heroes.find((heroe) => heroe.id===id)
}

// console.log(getHeroeById(2))

// filter

export const getHeroeByOwner = (owner) => {
  return heroes.filter((heroe) => heroe.owner === owner)
}
// console.log(getHeroeByOwner("DC"))