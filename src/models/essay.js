'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const schema = new Schema({
    schoolId : {
        type: ObjectId,
        required: true,
    },
    wordCount: {
        type: Integer,
        required: true,
    },
    deadline: {
        type: Date, 
        required: true, 
    },
    isRequired: {
        type: Boolean
    },
    content: {
        type: String,
        required: true
    }
    
});

module.exports = mongoose.model('Essay', schema);    