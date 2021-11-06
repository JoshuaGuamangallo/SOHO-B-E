const router = require('express').Router()
const data = require('../../data.json');

router.route('/').get((req, res) => {
    res.json(data)
  })

module.exports = router
