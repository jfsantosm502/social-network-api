const express = require('express');
const router = express.Router();
const postService = require('../services/post.service');

// routes
router.post('/create', create);

module.exports = router;

function create(req, res, next) {
    postService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}