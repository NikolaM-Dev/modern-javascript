// Desestructuration
const person = {
  name: 'Tony',
  age: 45,
  password: 'Ironman',
};

const { name: name2, age, password } = person;

console.log(name2);
console.log(password);

const useContext = ({ name, password, age, range = 'Captain' }) => {
  console.log(name, age, range);
  return {
    keyName: password,
    years: age,
    latlng: {
      lat: 14.1232,
      lng: -12.3131,
    },
  };
};

const {
  keyName,
  years,
  latlng: { lat, lng },
} = useContext(person);

console.log(keyName, years);
console.log(lat, lng);
