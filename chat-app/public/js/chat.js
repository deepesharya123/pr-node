const socket = io();

socket.on('countUpdated',(count)=>{
    console.log("the count has been updated",count);
})

document.querySelector('#increment').addEventListener('click',()=>{
    console.log("Clicked")
    socket.emit('increment');
})