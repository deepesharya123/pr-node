// console.log("HELLO THERE ,I am starting to learn the node again so that i can master the skills");

const fs  = require('fs');

fs.writeFileSync('create.txt',"CREATEd THIS FILE WITH THE HELP OF NODE.JS")


fs.appendFileSync("create.txt"," \nappend this content in the file")