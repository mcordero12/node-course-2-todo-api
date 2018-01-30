const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5a6fc99ee76f7f1030f5cb9122';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('ID not found');
//     }
//     console.log('Todo By ID', todo);
// }).catch((e) => console.log(e));

var userId = '5a6e76c9ba50512ebba3b11e';

User.findById(userId).then((user) => {
    if(!user) {
        return console.log('User not found');
    }
    console.log('User By ID', user);
}).catch((e) => console.log(e));
