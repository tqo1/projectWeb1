'use strict'

const repository = require('../repositories/school-repository');
const validationContract = require('../validators/validator');
//const authService = require('../services/auth-service');
//const md5 = require('md5');
// User = require('.user');//
/**
 * @api {get} /school Request School information
 * @apiName GetSchools
 * @apiGroup School
 *
 * @apiSuccess {String} name Full name of the school
 * @apiSuccess {String} city City of User.
 * @apiSuccess {String} country Country of the User.
 * @apiSuccess {Datetime} created  Date school was created.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *          {
 *              "name": "Columbia",
 *              "city": "New York"
 *              "country": "USA"
 *              "created": "2018-01-01 11:00:00",
 *          }
 *     ]
 *
 */
exports.get = async(req, res, next) => {
    try {
        let data = await repository.get();
        res.status(200).send(data);
    } catch(e) {
        res.status(500).send({message: 'Fail to get all schools'});
    }
}

exports.getById = async(req, res, next) => {
    try {
        let data = await repository.getById(req.params.name);
        res.status(200).send(data);
    } catch(e) {
        res.status(500).send({message: 'Fail to get the specific school'});
    }
}


/**
 * @api {post} /user/ Create a new School
 * @apiName CreateSchool
 * @apiGroup School
 *
 * @apiSuccess {String} name Full name of the school
 * @apiSuccess {String} city City of User.
 * @apiSuccess {String} country Country of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "User created"
 *     }
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *        "errors": {}
 *     }
 */
exports.post = async(req, res, next) => {
    try {
        // let contract = new validationContract();
        // contract.hasMinLen(req.body.name, 3, 'The name has to be at least 3 characters');
        // contract.isEmail(req.body.email, 'Invalid email');
        // contract.hasMinLen(req.body.password, 6, 'The password has to be at least 3 characters');

        // if(!contract.isValid()) {
        //     res.status(400).send(contract.errors()).end();
        //     return;
        // }    
        await repository.create({
            name: req.body.name,
            city: req.body.city,
            country: req.body.country,
        });
  
        res.status(200).send({message: 'School created'});
    } catch(e) {
        res.status(500).send({error: e});
    }
}

