const signup = require('express').Router();
const { UniqueConstraintError } = require('sequelize');
const bcrypt = require('bcrypt');
const { User } = require('../../models/');

signup.post('/', async (req, res) => {
    try {
        let { firstName, lastName, email, password } = req.body;

        // Return if all the input fields are not filled.
        if (!(firstName && lastName && email && password))
            return res.status(400).json({
                message: "Please fill all details"
            });

        // Encrypt password using md5 algorithm for security purposes
        let hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword
        })

        res.sendStatus(201);
    }
    catch (err) {
        // If User with email already exists, return Error message message.
        if (err instanceof UniqueConstraintError) {
            let { type: errorType } = err.errors[0];
            let errorField = Object.keys(err.fields)[0];
            if (errorType === 'unique violation')
                res.status(409).json({ errorField })
        } else {
            res.status(500).send(err);
        }
    }



});

module.exports = signup;