var mongoose = require('mongoose')

const PollSchema = new mongoose.Schema({
  name: String,
  creator: String,
  question: String,
  answerOptions: []
})

const Poll = mongoose.model('Poll', PollSchema)

module.exports = Poll