
const express = require('express');
const app = express();
app.listen(2828, () => console.log('Listening for connections....'));
app.use(express.static('public'));
app.use(express.json())

// Arrays
users = [];

chat_rooms = [];

messages = [];

app.post('/api', (request, response) => {
    console.log(request);
});

// General functions

function abort_if_not_exists(user_id){
    if (!users.includes(user_id)){
        express.request.aborted = true; // Litt usikker på denne syntaksen. :')
    }
}

function abort_if_exists(user_id){
    if(users.includes(user_id)){
        express.request.aborted = true; // Litt usikker på denne syntaksen. :')
    }

}


// Users
app.get('/api/users', (req, res) => {
    res.send(users);
});

app.post('/api/users', (req, res) =>{
   const user = {
       id: users.length + 1,
       name: req.body.name
   };
   users.push(user);
   res.send(users)
});

// /api/user

function getAllUsers(){
    return users
}

function addOneUser(){

}

// /api/user/<user-id>
// Restrictions:<user-id> is already registered.

function getOneUser(user_id){
    abort_if_not_exists(user_id);
    return users[user_id];
}

function deleteOneUser(user_id){
    abort_if_not_exists()
    users = users.filter(function(user){
        return user != user_id;
    });
}

// Chat-Rooms

// /api/rooms

function getAllRooms(){

}

function addOneRoom(){

}

// /api/room/<room-id>

function getOneRoom(){

}

// Room users

// /api/room/<room-id>/user
// Restrictions:Only registered users can join

function getAllRoomUsers(){

}

function addOneRoomUser(){

}

// Messages

// /api/room/<room-id>/messages
// Restrictions:Only users in the room can get messages.

function getAllMessages(){

}

// /api/room/<room-id>/<user-id>/messages
// Restrictions:
//      ●Only users who have joined the room can get or addmessages.
//      ●Only registered user-id's should be permitted as <user-id>

function getAllUserMessages(){

}

function addOneMessage(){

}



