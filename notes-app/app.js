// PRACTICE
// const utils = require('./utils');
// console.log(utils.add(2,3))

// const re = require('./utils.js');

// console.log(re);

// console.log(re.lastName)


// CHALLENGE

const validator = require('validator');
const notes = require('./notes');

console.log(validator.isEmail("deepesh@gmail.cosm"));

console.log(validator.isURL('https://googlde.com'));
console.log(validator.isURL('https://arya-wesather.herokuapp.com'));

console.log(notes.getNotes());
console.log(notes.add);
