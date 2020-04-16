const Router = require('express').Router();
const controller = require('../controllers/controller');

const initRoutes = app => {
  Router.get('/', controller.sendHomePage);
  return app.use('/', Router);
}

module.exports = initRoutes;
