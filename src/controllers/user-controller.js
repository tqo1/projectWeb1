'use strict'

const repository = require('../repositories/user-repository');
const validationContract = require('../validators/validator');
const authService = require('../services/auth-service');
const md5 = require('md5');
// User = require('.user');//
/**
 * @api {get} /user Request Users information
 * @apiName GetUsers
 * @apiGroup User
 *
 * @apiSuccess {String} name Full name of the user
 * @apiSuccess {String} email  Email address of the User.
 * @apiSuccess {Boolean} active  Status of the User.
 * @apiSuccess {Object[]} roles  Roles of the User.
 * @apiSuccess {Datetime} created  Date user was created.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *          {
 *              "name": "Luis Filipe",
 *              "email": "lionphilips@gmail.com",
 *              "active": true,
 *              "roles": ["user", "admin"],
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
        res.status(500).send({message: 'Falha ao processar sua requisição'});
    }
}

exports.getById = async(req, res, next) => {
    try {
        let data = await repository.getById(id);
        res.status(200).send(data);
    } catch(e) {
        res.status(500).send({message: 'Nope'});
    }
}

// exports.view = function (req, res) {
//     User.findById(req.params.user_id, function (err, data) {
//         if (err)
//             res.send(err);
//         res.json({
//             message: 'Contact details loading..',
//             data: user
//         });
//     });
// };
/**
 * @api {post} /user/ Create a new User
 * @apiName CreateUser
 * @apiGroup User
 *
 * @apiParam {String} name User fullname.
 * @apiParam {String} email User email address.
 * @apiParam {String} password User password.
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
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY),
            roles: ["student"]
        });
  
        res.status(200).send({message: 'User created'});
    } catch(e) {
        res.status(500).send({error: e});
    }
}

