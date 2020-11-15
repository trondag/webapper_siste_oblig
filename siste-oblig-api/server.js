const express = require('express')
const cors = require('cors')

function createServer(){
  const app = express()
  app.use(express.json())
  app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
  }))
  app.use('/users', require('./routes/user.route'));
  app.use('/polls', require('./routes/poll.route'));
  return app
}

module.exports = createServer