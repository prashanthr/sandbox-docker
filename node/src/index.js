import express from 'express'
import http from 'http'

const serverPort = process.env.PORT
const app = express()
app.use('/health', (req, res, next) => {
  console.log('Health check')
  res.json({ status: 'healthy'})
})
const server = async () => {
  console.log('Hello World! This is a sample node application')
  console.log('Environment Vars: ', process.env)
  let httpServer = http.Server(app)
  httpServer.listen(serverPort, () => {
    console.log(`Server running on ${serverPort}`)
  })
}

server()
