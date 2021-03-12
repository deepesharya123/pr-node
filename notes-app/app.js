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
    builder:{
        title:{
            describe:"this will be the title",
            demandOption:true,
            type:String
        }
    },
    handler(argv){
        const mynote = notes.readNotes(argv.title);
        if(mynote!==undefined)
            console.log(mynote);
        else
            console.log("There is note with this name");


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