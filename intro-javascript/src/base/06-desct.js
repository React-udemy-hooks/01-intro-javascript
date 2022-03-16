
//console.log("Hola Mundo")


const persona  ={
     nombre: 'Tony',
     edad:45,
     clave:'Ironman'
}

// console.log(persona.nombre)
// console.log(persona.edad)
// console.log(persona.clave)

// const { nombre:nameUser } = persona;

// console.log(nameUser)

// const { nombre, edad, clave } = persona
// console.log(nombre,edad,clave)

// //desectructuración en los argumentos

// const retornaPersona=({nombre})=>{
//     console.log(nombre)
// }

// retornaPersona(persona)

// //asignar un valor por defecto a una propiedad que no tiene el elemento principal

// const retornaPersona2=({nombre, rango = 'Capitan'})=>{
//     console.log(nombre, rango)
// }

// retornaPersona2(persona)

// // si existe la propiedad usa esa propiedad del elemento pincipal
// const persona2  ={
//     nombre: 'Tony',
//     edad:45,
//     clave:'Ironman',
//     rango: 'Soldado'
// }
// const retornaPersona3=({nombre, rango = 'Capitan'})=>{
//     console.log(nombre, rango)
// }

// retornaPersona3(persona2)



const useContext=({ clave,edad, nombre, rango = 'Capitan'})=>{
    console.log(nombre, rango)
    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat:3,
            lng:-3
        }
    }
}



const { nombreClave, anios, latlng:{ lat,lng } }  = useContext(persona)
//const { nombreClave, anios } = avenger
console.log(nombreClave,anios,lat,lng )
