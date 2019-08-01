'use strict'

const mongoose = require('mongoose');
const Essay = mongoose.model('Essay');

exports.get = async() => {
    let res = await Essay.find({}, 'name city country created');
    return res;
}

exports.getById = async(schoolId) => {
    let res = await Essay.findById(schoolId, 'created');
    return res;
}
exports.create = async(data) => {
    let essay = new Essay(data);
    await essay.save();
}