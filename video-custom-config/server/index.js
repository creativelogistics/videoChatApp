
// const  isAuthenticated  = require('../database/autentication.js')
// const authorized = require('../database/autentication.js')
const app = require('express')();
const express = require('express')
app.use(express.static('public'))

const fs = require('fs');
const path = require('path')

const key = path.join(__dirname,'certificate.key')
var cert = path.join(__dirname,'certificate.crt')
const options = {
  key: fs.readFileSync(key),
  cert: fs.readFileSync(cert)
};

const server = require('https').createServer(options,app);
const io = require('socket.io')(server);

// need to have ip address of whatever machine its running on
server.listen(3000,()=>console.log('video chat sever initialized'));
let users = {}

io.on('connection', socket => { 
    console.log('cpmme')   
    socket.on("userName",  (data)=>  {
        // console.log('data' + data.name, data.password ) 
        // if (isAuthenticated(data.name,data.password)){
            // the return values will be added to the   online user pool
             //authorized(data.name,data.password);
            //userInfo{userName : david234 socketId: fdijrfijwufwbeufbns}
        //}
        //                 if (!users[data.userName]) {
        //             users[data.userName] = socket.id
        //             console.log('socketusers' + users)
        //             console.log('user ' + users[data.userName])
        //             console.log('username  ' + data.userName)
        //         }
        // })
    })
    socket.emit("yourID", socket.id);
        if (!users[socket.id]) {
            users[socket.id] = socket.id
        }
    socket.emit("users", users);
    socket.on('disconnect', () => {
        delete users[socket.id];
    })
    socket.on('callUser', data =>{
        io.to(data.userToCall).emit('hey', {signalData: data.signalData, from: data.from})
    })
    socket.on("acceptCall", (data) => {
        io.to(data.to).emit('callAccepted', data.signal);
    })
})
    
