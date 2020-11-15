var UserService = require('../services/user.service')    

exports.getUsers = async function (req, res, next) {
    // Validate request parameters, queries using express-validator
    var page = req.params.page ? req.params.page : 1;
    var limit = req.params.limit ? req.params.limit : 10;
    try {
        var users = await UserService.getUsers({}, page, limit)
        return res.status(200).json({ status: 200, data: users, message: "Succesfully Users Retrieved" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.createUser = async function (req, res, next) {
    let data = req.body;
    console.log(data)
    try {
        await UserService.createUser(data)
        return res.status(201).json({status: 201, message: "Successfully Created User"});
    } catch (e) {
        console.error(e)
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.loginUser = async function (req, res, next) {
    console.log(req.query.email)
    let email = req.query.email;
    try {
        let data = await UserService.loginUser(email)
        if (data.length === 0){
            return res.status(404).json({status: 404, message: "User not found"})
        }
        return res.status(200).json({status: 200, user: data[0], message: "User found"})
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message})
    }
}