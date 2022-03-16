# 01-intro-javascript

0. [CreateApp react](#schema0)
1. [Constantes y variables Let](#schema1)
1. [Template String](#schema2)
1. [Arreglos](#schema3)
1. [Funciones](#schema4)
1. [Desestructruación de objetos](#schema5)




Promesas

Fetch API

Ternarios

Async - Await

<hr>

<a name="schema0"></a>

# 0 CreateApp react
Vamos a crear una app con este comando de react

Doc: https://create-react-app.dev/
~~~bash
npx create-react-app intro-javascript
~~~

Y cuando esté todo instalado navegamos a la carpeta que se no ha creado con el nombre de la app y ejecutamos:
~~~
npm start
~~~

Se nos abre nuestra primer app de react.
Y borramos todos los archivos que estan en la carpeta `scr` y creamos nuestros archivo `index.js` donde se va anidar todo la app de react.

<hr>

<a name="schema1"></a>

# 1 Constantes y variables Let

Para valores constantes usamos `const` para valores variables `let`
- `index.js`
~~~js
const nombre = 'Patricia';
const apellido = 'Carrasco';

let dado = 4
console.log(nombre,apellido,dado)
dado = 6 
console.log(nombre,apellido,dado)
~~~

<hr>

<a name="schema2"></a>

# 2 Template String
- Primera version de concatenar dos strings
~~~js
const nombre = 'Patricia';
const apellido = 'Carrasco';

const nombreCompleto = nombre +' '+ apellido
console.log(nombreCompleto)
~~~
- Segunda version 
~~~js
const nombreCompleto2 = `${nombre} ${apellido}`
console.log(nombreCompleto2)
~~~

- Tercera version, en esta versión tenemos salto de líneas, al darle enter.
~~~js
const nombreCompleto3 = `
${nombre} 
${apellido}
`
console.log(nombreCompleto3)
~~~
- Función con string
~~~js
function getSaludo(nombre){
    return 'Hola '+ nombre
}

console.log(`Este es un texto ${ getSaludo(nombre) }`)
~~~

<hr>

<a name="schema3"></a>

# 3 Arreglos
Definición de un array, no se usa mucho
~~~js
const arr = new Array();
console.log(arr)
~~~
Mejor de esta manera.
~~~js
const arr2 =[1]
arr2.push(2)
console.log(arr2)
~~~
A la hora de añadir elementos a un array no es aconsejable usar `push` porque modifica el array
~~~js
let arr3 = arr2
arr3.push(5)
console.log(arr2)
console.log(arr3)
~~~
Resultado:
~~~
(3) [1, 2, 5]
(3) [1, 2, 5]
~~~
Así que usamos:
~~~js
let arr4 = [arr2, 5]
console.log(arr2)
console.log(arr4)
~~~
Resultado:
~~~
[Array(3), 5]
~~~

Pero para obtener todo el array anterior más el elemento nuevo usamos:
~~~js
let arr5 = [...arr2, 5]
console.log(arr2)
console.log(arr5)
~~~
Resultado
~~~
(4) [1, 2, 5, 5]
~~~
Usando map
~~~js
let arr6 = arr5.map(function(number){
    return number * 2
});
console.log(arr6)
~~~
Resultado
~~~
(4) [2, 4, 10, 10]
~~~
<hr>

<a name="schema4"></a>

# 4 Funciones
- Primera manera de definir una función:
~~~js
function saludar ( nombre){
    return `Hola ${nombre}`
}

console.log(saludar('Patricia'))
~~~
No muy recomendable porque podemos asignar a `saludar` cualquier valor y sería válido, pero ya no sería una función.
Entonces mejor usar esta manera:
~~~js
const saludar = function( nombre ){
    return `Hola ${nombre}`
}

console.log(saludar('Patri'))
~~~

- Arrow function
~~~js
 const saludar2 =(nombre) =>{
    return `Hola ${nombre}`
 }
 console.log(saludar2('Arrow'))
 ~~~
 Ventajas de las arrow funtions.
~~~js
const saludar3 =(nombre) => `Hola ${nombre}`
 
console.log(saludar3('Arrow sin return'))
~~~
Refactorizamos la función siguiente:
~~~js
const getUser = ()=>{
    return{
        uid:'ABC134',
        username: 'El_papi'
    }
}
console.log(getUser())

~~~
~~~js
const getUser = ()=>({
        uid:'ABC134',
        username: 'El_papi'
    })
console.log(getUser())
~~~
<hr>

<a name="schema5"></a>

# 5 Desestructruación de objetos
* (sumamente importante)
Doc: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

- Primera version
~~~js
const persona  ={
    nombre: 'Tony',
    edad:45,
    clave:'Ironman'
}

console.log(persona.nombre)
console.log(persona.edad)
console.log(persona.clave)
~~~
- Segunda version
Aquí asiganmos `persona.nombre` a `nameUser`
~~~js
const { nombre:nameUser } = persona;

console.log(nameUser)

~~~
- Tercera version y la más usada
~~~js
const { nombre, edad, clave } = persona
console.log(nombre,edad,clave)
~~~

- Desectructuración en los argumentos
~~~js
const retornaPersona=({nombre})=>{
    console.log(nombre)
}

retornaPersona(persona)
~~~
- Asignar un valor por defecto a una propiedad que no tiene el elemento principal
~~~js
const retornaPersona2=({nombre, rango = 'Capitan'})=>{
    console.log(nombre, rango)
}

retornaPersona2(persona)
~~~
- si existe la propiedad usa esa propiedad del elemento pincipal
~~~js
const persona2  ={
    nombre: 'Tony',
    edad:45,
    clave:'Ironman',
    rango: 'Soldado'
}
const retornaPersona3=({nombre, rango = 'Capitan'})=>{
    console.log(nombre, rango)
}

retornaPersona3(persona2)
~~~
- Objeto dentro de un objeto
~~~js
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
console.log(nombreClave,anios,lat,lng )
~~~