'use strict';


const express = require('express');
const cors = require('cors');
const errorHandler = require('./error-handlers/500.js');
const notFound = require('./error-handlers/404.js');
const authRoutes = require('./auth/routes.js');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Hello to bearer-auth server ')
})

app.use(authRoutes);
app.use(notFound);
app.use(errorHandler);

module.exports = {
    server: app,
    startup: (port) => {
        app.listen(port, () => {
            console.log(`Server Up on ${port}`);
        });
    },
};