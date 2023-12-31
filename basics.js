// 3rd party module from npm
const express = require("express");
const app = express();
const socketio = require("socket.io");

app.use(express.static(__dirname + "/public"));

const expressServer = app.listen(8001);
const io = socketio(expressServer);

io.on("connection", (socket) => {
  console.log(socket.id + "is connected!");
  socket.emit("mesageFromServer", { data: "Welcome to the socket server" });
  socket.on("mesageFromClient", (data) => {
    console.log("data from client side", data);
  });
});
