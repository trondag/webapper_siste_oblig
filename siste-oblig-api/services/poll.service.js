var Poll = require('../models/poll.model')


exports.getPolls = async function (){
  try {
    return await Poll.find()
  } catch (e) {
    console.error(e)
    throw Error('Could not find any polls')
  }
}

exports.getPoll = async function (pollId){
  try {
    return await Poll.find({
      _id: pollId
    })
  } catch (e) {
    console.error(e)
    throw Error('Could not find poll')
  }
}

// exports.getPoll

exports.createPoll = async function (data) {
  try {
    return await Poll.create({
      name: data.name,
      creator: data.creator,
      question: data.question,
      answerOptions: data.answerOptions
    })
  } catch (e) {
    console.error(e)
    throw Error('Could not create poll')
  }
}