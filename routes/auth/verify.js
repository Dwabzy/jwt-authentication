const verifyJWT = require('express').Router();

verifyJWT.get('/', async (req, res) => {
    res.sendStatus(200);
});

module.exports = verifyJWT;