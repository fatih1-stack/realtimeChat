const express = require ("express");
const app = express();
const socket = require ("socket.io");

app.use (express.static("public"));
const server = app.listen (100, () => console.log ("server 100 portundan ayaklandı"));
const io = socket(server);

io.on("connection", (socket) => {
    console.log (socket.id);
    socket.on ("chat", data => {
io.sockets.emit("chat",data);
    })
})




