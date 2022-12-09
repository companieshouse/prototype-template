const express = require('express');
const { countBy } = require('lodash');
const router = express.Router()

// index
router.post('/index', function(req, res) {
    res.redirect('_index');
})

// Add your routes here - above the module.exports line
module.exports = router
