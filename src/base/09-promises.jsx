import { getHeroeById } from './base/08-imp-exp';

// const promise = new Promise((resolve, rejext) => {
//   setTimeout(() => {
//     const heroe = getHeroeById({ id: 2 });
//     resolve(heroe);
//   }, 2000);
// });

// promise.then(console.log);

const getHeroeByIdAsync = ({ id }) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      const p1 = getHeroeById({ id });
      if (p1) resolve(p1);
      else reject("Couldn't find the hero");
    }, 2000)
  );

getHeroeByIdAsync({ id: 1 }).then(console.log).catch(console.warn);
