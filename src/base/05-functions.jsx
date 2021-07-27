// funtions

const greet = function ({ name }) {
  return `Hi, ${name}`;
};

const greet2 = ({ name }) => {
  return `Hi, ${name}`;
};

const greet3 = ({ name }) => `Hi, ${name}`;

const greet4 = () => `Hi World!`;

console.log(greet({ name: 'Juan Carlos' }));
console.log(greet2({ name: 'Juan Carlos' }));
console.log(greet3({ name: 'Juan Carlos' }));
console.log(greet4());

const getUser = () => ({
  uid: 'ABC123',
  username: 'El_Papi1502',
});

console.log(getUser());
