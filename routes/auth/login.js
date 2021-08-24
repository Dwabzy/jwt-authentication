const login = require('express').Router();
const bcrypt = require('bcrypt');

const { User, Token } = require('../../models/');
const createTokens = require('../../helpers/tokens');

login.post('/', async (req, res) => {
    let { email, password } = req.body;
    if (!(email && password))
        return res.status(400).json({
            message: "Please fill all details",
        });

    try {
        // Find user record with the given credentials  if it exists
        let user = await User.findOne({
            where: {
                email: req.body.email
            }
        })

        // If User does not exist
        if (!user)
            return res.status(404).json({
                message: "User does not exist"
            });

        if (await bcrypt.compare(password, user.password)) {

            // Create an Access Token and Refresh if the credentials match and send it to the clientside
            // The AccessToken will expire in 5 minutes

            // Refresh token expires in 7 days
            let refreshTokenDuration = 604800;

            const accessToken = createTokens.generateAccessToken(user.id);
            const refreshToken = createTokens.generateRefreshToken(user.id, refreshTokenDuration);

            let expiresAt = (new Date().setMilliseconds(0) / 1000) + refreshTokenDuration;

            // Create Refresh token in database whenever the user logs in.
            await Token.create({ userId: user.id, refreshToken, valid: true, expiresAt });


            // Refresh Token is set in the cookie and the Access token is sent to the client in the response.
            res.cookie('refreshToken', refreshToken, { httpOnly: true });
            res.status(200).json({ message: "Successfuly Logged in!", accessToken });
        }
        // Wrong Password
        else {
            return res.status(401).json({
                message: "Password is incorrect"
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = login;