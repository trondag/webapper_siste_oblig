const express = require('express')
const router = express.Router();

var PollController = require('../controllers/poll.controller')

router.post('/', PollController.createPoll)
router.get('/', PollController.getPolls)
router.get('/:pollId', PollController.getPoll)

module.exports = router;