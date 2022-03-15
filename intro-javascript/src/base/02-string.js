
console.log("Hola Mundo")

const nombre = 'Patricia';
const apellido = 'Carrasco';

const nombreCompleto = nombre +' '+ apellido
console.log(nombreCompleto)

const nombreCompleto2 = `${nombre} ${apellido}`
console.log(nombreCompleto2)

const nombreCompleto3 = `
${nombre} 
${apellido}
`
console.log(nombreCompleto3)


function getSaludo(nombre){
    return 'Hola '+ nombre
}

console.log(`Este es un texto ${ getSaludo(nombre) }`)