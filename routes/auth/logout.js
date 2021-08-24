const logout = require('express').Router();
const jwt = require("jsonwebtoken");

const { Token } = require('../../models/');


logout.put('/', async (req, res) => {
    // Set the validity of refreshtoken to be deleted to false in the database
    let { refreshToken } = req.cookies;
    await Token.update({ valid: false }, {
        where: {
            refreshToken
        }
    })
    res.sendStatus(204);
});

module.exports = logout;