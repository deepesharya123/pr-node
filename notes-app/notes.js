const fs = require('fs');
const chalk = require('chalk'); 

const getNotes = function(){
    return "Your notes ";
}

const addNote =  (title,body)=>{
    const allNotes = loadNotes();
    // console.log(typeof(loadingNotes))
    const dup = allNotes.filter((note)=>{
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

const removeNote = (title) =>{

    const allNotes = loadNotes();
    var found = 0;
    const noteToKeep = allNotes.filter((note)=>{
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
const listNotes = ()=>{
    try{
    const bufferData = fs.readFileSync('notes.json');
    const stringData = bufferData.toString();
    const jsonData = JSON.parse(stringData);
    return jsonData;
    }catch(e){
        console.log("The error is :" +e)
    }
} 


const saveNotes = (notes)=>{
    const notesString = JSON.stringify(notes);

    fs.writeFileSync('notes.json',notesString)
}

const loadNotes =  ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const jsonData = dataBuffer.toString();
        return JSON.parse(jsonData);
    }catch(e){
        return []
    }
}


module.exports = {
                getNotes,
                addNote,
                removeNote:removeNote,
                listNotes:listNotes,
    
    }
