const person = {
  name: 'Tony',
  lastName: 'Stark',
  age: 45,
  address: {
    city: 'New York',
    zip: 551231,
    lat: 14.3232,
    lng: 34.9233321,
  },
};

console.log({ person });

// const person2 = person; // No hacer jamas >:[
const person2 = { ...person };

console.log(person2);
