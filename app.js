require('dotenv').config()
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const routes = require('./routes');
const { Op } = require("sequelize");
const cron = require('node-cron');
const { Token } = require('./models');

const app = express();

app.use('/', express.static(__dirname + '/build'));
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', routes);

cron.schedule('0 0 0 * * *', async () => {
    // Removes Refresh Tokens that have expired from database every day at midnight
    let currentTime = (new Date().setMilliseconds(0) / 1000);
    Token.destroy({
        where: {
            expiresAt: {
                [Op.lt]: currentTime
            }
        }
    })
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));


