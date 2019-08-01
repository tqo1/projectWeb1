'use strict'

const repository = require('../repositories/essay-repository');
const validationContract = require('../validators/validator');

exports.get = async(req, res, next) => {
    try {
        let data = await repository.get();
        res.status(200).send(data);
    } catch(e) {
        console.log(e);
        res.status(500).send({message: 'Fail to get all essays'});
    }
}

exports.getById = async(req, res, next) => {
    try {
        let data = await repository.getById(req.params.schoolId);
        res.status(200).send(data);
    } catch(e) {
        console.log(e);
        res.status(500).send({message: 'Fail to get the specific essay'});
    }
}


exports.post = async(req, res, next) => {
    try {

        await repository.create({
            schoolId: req.body.schoolId,
            wordCount: req.body.wordCount,
            deadline: req.body.deadline,
            isRequired: req.body.isRequired,
            content: req.body.content,
        });
  
        res.status(200).send({message: 'Essay created'});
    } catch(e) {
        res.status(500).send({error: e});
    }
}

exports.getBySchoolId = async(req, res, next) => {
    try {
        let data = await repository.getBySchoolId(req.params.schoolId);
        res.status(200).send(data);
    } catch(e) {
        console.log(e);
        res.status(500).send({message: 'Fail to get the specific essay by school ID'});
    }
}
