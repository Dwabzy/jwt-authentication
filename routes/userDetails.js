const userDetails = require('express').Router();
const { User } = require('../models');

userDetails.get('/', async (req, res) => {
    // Send User data to client if user exists in database. ( Private Route, Only works if user is authorized )
    let user = req.userId && await User.findByPk(
        req.userId,
        {
            attributes: [
                'firstName',
                'lastName',
                'email',
                'createdAt',
            ]
        })

    res.status(200).json(user);
});


module.exports = userDetails;