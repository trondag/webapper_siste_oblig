var User = require('../models/user.model')

exports.getUsers = async function (query, page, limit) {

    try {
        var users = await User.find(query)
        return users;
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users')
    }
}

exports.createUser = async function (data) {
    try {
        return await User.create({email: data.email, givenName: data.givenName, familyName: data.familyName})
    } catch (e) {
        console.error(e)
        throw Error('Could not create user')
    }
}

exports.loginUser = async function (email) {
    try {
        return await User.find({
            email
        })
    } catch (e) {
        console.error(e)
        throw Error('User not found')
    }
}