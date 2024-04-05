const generateName = require("sillyname");
const superheroes = require('superheroes');


const name = generateName();

const name2 = superheroes.random();

console.log(`I am ${name2}`)
