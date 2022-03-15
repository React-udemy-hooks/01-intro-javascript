# 01-intro-javascript

0. [CreateApp react](#schema0)
1. [Constantes y variables Let](#schema1)
1. [Template String](#schema2)
1. [Instalamos en el front React hook form](#schema3)






Objetos literales

Arreglos

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