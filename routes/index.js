const router = require('express').Router();
const path = require('path');
const verifyToken = require('../middleware/verifyJWT');
const userDetailsRoute = require('./userDetails');
const tokenRoute = require('./token');
const authRouter = require('./auth');


router.use('/auth', authRouter);

// Gets userdata if the request is authorized, verifyToken middleware is called before the actual route is called.
router.use('/user-details', [verifyToken], userDetailsRoute);

// Used to get new access token by using the refresh token
router.use('/token', tokenRoute);

// Point to index.html whenever the route does not match with api routes, so that react can handle the client side routing
router.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../build/index.html'), function (err) {
        if (err) {
            res.status(500).send(err)
        }
    })
})

module.exports = router;
