// Arrays in js

// const arr = new Array(100);
const arr = [1, 2, 3, 4];
// arr.push(1);
// arr.push(2);
// arr.push(3);
// arr.push(4);

// let arr2 = arr no hacer esto >:[
const arr2 = [...arr, 5];

const arr3 = arr2.map((number) => number * 2);

console.log(arr, arr2, arr3);
