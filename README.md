# 01-intro-javascript

0. [CreateApp react](#schema0)
1. [Constantes y variables Let](#schema1)
1. [Template String](#schema2)
1. [Arreglos](#schema3)




Desestructruación * (sumamente importante)

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