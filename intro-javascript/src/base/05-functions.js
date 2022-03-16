
console.log("Hola Mundo")

// function saludar ( nombre){
//     return `Hola ${nombre}`
// }

// console.log(saludar('Patricia'))


const saludar = function( nombre ){
    return `Hola ${nombre}`
}

console.log(saludar('Patri'))


//arrow function
 const saludar2 =(nombre) =>{
    return `Hola ${nombre}`
 }
 console.log(saludar2('Arrow'))



 const saludar3 =(nombre) => `Hola ${nombre}`
 
 console.log(saludar3('Arrow sin return'))


// const getUser = ()=>{
//     return{
//         uid:'ABC134',
//         username: 'El_papi'
//     }
// }
// console.log(getUser())



const getUser = ()=>({
        uid:'ABC134',
        username: 'El_papi'
    })
console.log(getUser())


//Tarea
//1. Transformar a arrow function getUuserActivo
//2. Tiene que retornar un objeto implícito
//3. Pruebas

// function getUsuarioActivo( nombre ){
//     return{
//         uid:'ABC567',
//         username: nombre
//     }
// }
const getUsuarioActivo= (nombre)=>({
    uid:'ABC567',
    username: nombre
})


const usuarioActivo = getUsuarioActivo('Patricia')
console.log(usuarioActivo)
