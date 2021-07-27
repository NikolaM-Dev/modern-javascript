const name = 'Nikola';
const lastName = 'Tesla';

const fullName = `${name} ${lastName}`;

console.log(fullName);

const getGreeting = ({ name }) => {
  return `Hola ${name}`;
};

console.log(`Este es un texto: ${getGreeting({ name })}`);
