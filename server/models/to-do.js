const mongoose = require('mongoose');
const schema = mongoose.Schema;

const toDoSchema = new schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('ToDo', toDoSchema)
