'use strict';

var socket;
var post = require("../lib/post");

module.exports.getSocket = getSocket;
module.exports.setIO = setIO;

function setIO(io) {    
    io.sockets.on('connection', function (socket) {
        setSocket(socket);
        
        socket.on('commentFromClient', function(data) {
            console.log(data);
            post.addComment(data.id, data.comment, function() {
            // Broadcast after added to database
            socket.broadcast.emit('commentFromServer', {id: data.id, comment: data.comment});
            socket.emit('commentFromServer', {id: data.id, comment: data.comment});
        });             
           
        });
    });
}

function getSocket() {
    return socket;
}
function setSocket(sock) {
    if (undefined == socket) socket = sock;
}