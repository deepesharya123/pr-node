const fs = require('fs');

const book = {
    title:"JEET AAPKI",
    author:"SHIVB KHERA"
}

// const jsonBook = JSON.stringify(book);
// console.log(jsonBook)

// fs.writeFileSync('1json.json',jsonBook)

const dataBuffer = fs.readFileSync('1json.json');
const stringData = dataBuffer.toString();
console.log(stringData);
const parsedData = JSON.parse(stringData);
console.log(parsedData)
console.log(stringData.author)
console.log(parsedData.author)