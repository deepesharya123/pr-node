const express = require('express');
const hbs = require('handlebars');

const socketio = require('socket.io');
const app = express();
const http = require('http');
const server = http.createServer(app);

const io = socketio(server);        //telling io to work with 'server'
const port = process.env.PORT || 3000;
const path = require('path');

const publicDir = path.join(__dirname , "../public");
const viewsPath =  path.join(__dirname,'../templates/views');

app.set('views',viewsPath);
app.set('view engine','hbs');
app.use(express.static(publicDir));

server.listen(port,()=> console.log(`Listening on port ${port}`));