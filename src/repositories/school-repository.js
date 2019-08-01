'use strict'

const mongoose = require('mongoose');
const School = mongoose.model('School');

exports.get = async() => {
    let res = await School.find({}, 'name city country created');
    return res;
}

exports.getById = async(name) => {
    let res = await School.findById(name, 'name city country created');
    return res;
}

exports.create = async(data) => {
    let school = new School(data);
    await school.save();
}

