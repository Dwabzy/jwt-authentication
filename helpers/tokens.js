const jwt = require('jsonwebtoken');

module.exports = {
    generateAccessToken: (userId, duration) => {
        if (!duration)
            duration = "5s";
        return jwt.sign({ id: userId }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: duration
        });
    },

    generateRefreshToken: (userId, duration) => {
        if (!duration)
            duration = "7d";
        return jwt.sign({ id: userId }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: duration
        });
    },
}