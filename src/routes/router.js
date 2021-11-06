const router = require('express').Router();

const projectsRoute = require('./projects');

router.use('/projects', projectsRoute);

module.exports = router;