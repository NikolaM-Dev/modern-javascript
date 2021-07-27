import heroes, { owners } from '../data/heroes';

const getHeroeById = ({ id }) => heroes.find((heroe) => heroe.id === id);

console.log(getHeroeById({ id: 2 }));

const getHeroeByOwner = ({ owner }) =>
  heroes.filter((heroe) => heroe.owner === owner);

console.log(getHeroeByOwner({ owner: 'DC' }));
