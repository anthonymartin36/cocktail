import express from 'express'
import * as Path from 'node:path'
import functions from 'firebase-functions'


import cocktails from './routes/cocktails'
//import fsPromises from 'node:fs/promises'

import * as dotenv from 'dotenv'

const server = express()
dotenv.config()
server.use(express.json())

server.use('/api/v1/cocktails', cocktails)

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  const envConfig = dotenv.config()
  if (envConfig.error) throw envConfig.error
}

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
  
}

//exports.api = functions.https.onRequest(server)

export default server