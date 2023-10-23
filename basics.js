// 3rd party module from npm
const express = require("express");
const app = express();
const socketio = require("socket.io");

const expressServer = app.listen(8001);
const io = socketio(expressServer);
