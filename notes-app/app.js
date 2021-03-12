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
    'handler'(argv){
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
    handler(argv){
        notes.removeNote(argv.title)
    }

})

yargs.command({
    command:"read",
    describe:"READ A NOTE",
    handler(){
        notes.listNotes()

    }
})

yargs.command({
    'command':"list",
    'describe':"list out all the notes",
    'handler'(){
        // console.log(chalk.red.notes.listNotes())
        // console.log(chalk.red(notes.listNotes()))

        console.log(notes.listNotes())

    }
})

yargs.parse();
// console.log(yargs.argv)