const express = require('express');

const ENDPOINT = '/v1';

const auth = require('./auth');
const about = require('./about');
const resource = require('./resource');
const sponser = require('./sponser');
const whatwedosection = require('./whatwedo');
const others = require('./other');
const event = require('./event');
const home = require('./home');
const description = require('./description');
const banner = require('./banner');

module.exports = function (app) {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(ENDPOINT + `/auth`, auth);
    app.use(ENDPOINT + `/about`, about);
    app.use(ENDPOINT + `/resource`, resource);
    app.use(ENDPOINT + `/sponser`, sponser);
    app.use(ENDPOINT + `/whatwedo`, whatwedosection);
    app.use(ENDPOINT + `/event`, event);
    app.use(ENDPOINT + `/others`, others);
    app.use(ENDPOINT + `/home`, home);
    app.use(ENDPOINT + `/description`, description);
    app.use(ENDPOINT + `/banner`, banner);
}