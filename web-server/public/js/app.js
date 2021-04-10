fetch('https://puzzle.mead.io/puzzle').then((response)=>{
    response.json().then((data)=>{
        console.log(data)
    })
})

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const  messageOne = document.querySelector('#message-1');
const messageSecond = document.querySelector('#message-2');

// messageOne.textContent = 'javascipt'

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault();     //prevent from default refresh

    const location = search.value;
    messageOne.textContent = "Loading...  "
    messageSecond.textContent = "...  "
    
    fetch('http://localhost:3000/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error)
             messageOne.textContent = data.error
        else{
            messageOne.textContent = data.location
            messageSecond.textContent = data.forecast
        }   
        // messageOne.textContent = "ERROR"


    })
})

})