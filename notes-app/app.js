const yargs = require('yargs');
const chalk = require('chalk');
const notes = require('./notes');
const fs = require('fs');

// console.log(process.argv);
// const command = process.argv[2];

yargs.command({
    'command':"add",
    'describe':"ADD A new NOTE",
    'builder':{
        'title':{
            'describe':"just a description of the command",
            'demandOption':true,
            'type':String
        },
        body:{
            describe:"THIS WILL DESCRIBE",
            demandOption:true,
            type:String,
        }
    },
    'handler': function (argv){
        notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command:"remove",
    describe:"REMOVING A NOTE",
    builder:{
        title:{
            describe:"JUST THE DISCRIPTION",
            demandOption:true,
            type:String,
        },
      
    },
    handler: function(argv){
        notes.removeNote(argv.title)
    }

})

yargs.command({
    command:"read",
    describe:"READ A NOTE",
    handler:function (){
        console.log("THIS is helpfull in reading the important things fromt he shop")
    }
})

yargs.command({
    'command':"list",
    'describe':"list out all the notes",
    'handler':function(){
        console.log("LIST OUT ALL THE NOTEs")
    }
})

yargs.parse();
// console.log(yargs.argv)