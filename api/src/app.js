const express = require('express')
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')
const routes = require('./routes')
const io = require('./middlewares/io')

class AppController {
  constructor () {
    this.express = express()
    this.io = null

    this.middlewares()
    this.database()
    this.routes()
  }

  middlewares () {
    this.express.use((req, res, next) => { io(req, res, next, this.io) })
    this.express.use(express.json())
    this.express.use(cors())
    this.express.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
  }

  database () {
    mongoose.connect(process.env.MONGODB_CONNECTION_STRING, { useNewUrlParser: true })
  }

  routes () {
    this.express.use(routes)
  }

  setIo (io) {
    this.io = io
  }
}

module.exports = new AppController()
