// 3rd party module from npm
const express = require("express");
const app = express();
const socketio = require("socket.io");

app.use(express.static(__dirname + "/public"));

const expressServer = app.listen(8002);
const io = socketio(expressServer);

io.on("connection", (socket) => {
  console.log(socket.id + "is connected!");
  socket.on("newMessageToServer", (dataFromClient) => {
    // Here io will send the message to all the clients
    io.emit("newMessageToClients", { text: dataFromClient.text });
  });
});
