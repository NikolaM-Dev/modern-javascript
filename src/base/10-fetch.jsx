const API_KEY = 'gpUFXO3qzly0cHNaGV8lbGzqdpxklvVH';

fetch(`http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)
  .then((response) => response.json())
  .then(({ data }) => {
    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  })
  .catch(console.warn);
