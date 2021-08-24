const authRouter = require('express').Router();
const verifyToken = require('../../middleware/verifyJWT');
const loginRoute = require('./login');
const signupRoute = require('./signup');
const logoutRoute = require('./logout');
const verifyRoute = require('./verify');

authRouter.use('/login', loginRoute);
authRouter.use('/signup', signupRoute);
authRouter.use('/logout', logoutRoute);
authRouter.use('/verify', [verifyToken], verifyRoute);


module.exports = authRouter;
