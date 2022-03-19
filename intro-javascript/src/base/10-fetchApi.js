
console.log("Hola Mundo");
const apiKey = 'api_key de giphy'

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
  .then((res) => res.json())
  .then(({ data }) => {
    const { url } = data.images.original
    const img = document.createElement('img')
    img.src = url

    document.body.append(img)
    console.log(url)
  })
  .catch(console.warm);