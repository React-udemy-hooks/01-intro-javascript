console.log("Hola Mundo");

const personajes = ["Goku", "Otro", "coco"];

console.log(personajes[0]);

const [, , p3] = personajes;

console.log(p3);

const retornoArreglo = () => {
  return ["ABC", 123];
};

const [ letras, numeros ] = retornoArreglo();
console.log(letras, numeros);


const useState = (valor) => {
  return [valor, ()=>{
    console.log('Hola mundo')
  }]
}
const arr = useState('Patri')

arr[1]();

// Tarea
// 1. el primer valor del arr se llamara nombre
// 2. se llamar setNombre
const [nombre, setNombre] = useState('yo misma')
console.log(nombre)
setNombre();