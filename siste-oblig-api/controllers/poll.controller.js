var PollService = require('../services/poll.service')

exports.createPoll = async function (req, res, next) {
  try {
    await PollService.createPoll(req.body)
    return res.status(200).json({status: 200, message: "Successfully created a poll"});
  } catch (e) {
    console.error(e)
    return res.status(400).json({status: 400, message: e.message})
  }
}

exports.getPolls = async function (req, res, next) {
  try {
    let polls = await PollService.getPolls()
    return res.status(200).json({status: 200, polls, message: "Sucessfully retrieved polls"})
  } catch (e) {
    console.error(e)
    return res.status(400).json({status: 400, message: e.message})
  }
}

exports.getPoll = async function (req, res, next) {
  try {
    let poll = await PollService.getPoll(req.params.pollId)
    return res.status(200).json({status: 200, poll: poll[0], message: "Successfully retrieved poll"})
  } catch (e) {
    console.error(e)
    return res.status(400).json({status: 400, message: e.message})
  }
}