
console.log("Hola Mundo");

// con new Promise
const getImagePromesa = () => {
  const promesa = new Promise((resolve, reject) => {
    resolve('Holssss')
  })
  return promesa
}

getImagePromesa().then(console.log)


// con async/await

const getImage1 = async () => {
  return 'hloikgśñghsñlkdfgsdfñgl'
}

console.log(getImage1())


const getImage = async () => {
  try {
    const apiKey = "api_key";
    const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const { data } = await res.json();
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    // manejo del error
    console.log(error)
  }
}

getImage()