const fs = require('fs');
const chalk = require('chalk'); 

const getNotes = function(){
    return "Your notes ";
}

const addNote = function (title,body){
    const allNotes = loadNotes();
    // console.log(typeof(loadingNotes))
    const dup = allNotes.filter(function(note){
        return note.title===title 
    })

    if(dup.length<=0){

    allNotes.push({
        title:title,
        body:body
    })

    saveNotes(allNotes);
    }
    else{
        console.log("THIS IS ALREADY TAKEN TITLE")
    }
}

const removeNote = function(title){

    const allNotes = loadNotes();
    var found = 0;
    const noteToKeep = allNotes.filter(function(note){
        if(note.title===title){
            found=1;
        }
        return note.title!==title;
        
    })

    if(found===0){
        console.log(chalk.green.bold("NOTE NOT FOUND"))
    }else{
        console.log(chalk.red("NOTE DELETED"))
    }

    saveNotes(noteToKeep)   




}

const saveNotes = function(notes){
    const notesString = JSON.stringify(notes);

    fs.writeFileSync('notes.json',notesString)
}

const loadNotes = function (){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const jsonData = dataBuffer.toString();
        return JSON.parse(jsonData);
    }catch(e){
        return []
    }
}


module.exports = {getNotes,
                    addNote,
                    removeNote
    
    }
