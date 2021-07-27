// const getImagePromise = () => new Promise((resolve) => resolve('Hay data'));
// getImagePromise().then(console.log);

const API_KEY = 'gpUFXO3qzly0cHNaGV8lbGzqdpxklvVH';

const getImage = async () => {
  try {
    const response = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    );
    const { data } = await response.json();
    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  } catch (err) {
    console.error(err);
  }
};

getImage();
