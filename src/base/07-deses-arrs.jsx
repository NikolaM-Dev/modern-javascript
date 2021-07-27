const characters = ['Goku', 'Vegeta', 'Trunks'];

// const [goku, vegeta, trunks] = characters;
const [, , p3] = characters;

console.log(p3);

const returnArr = () => {
  return ['ABC', 123];
};

const [words, numbers] = returnArr();

console.log(words, numbers);

const useState = (value) => {
  return [
    value,
    () => {
      console.log('Hola Mundo');
    },
  ];
};

const [name, setName] = useState('Goku');
console.log(name);

setName();
