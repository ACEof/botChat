let express = require('express')
let requestBody = require('./requestBody')
let fetch = require('node-fetch')
require('dotenv').config()

let app = express()

let setUserId = new Set()

app.get('/', (req, res) => {
  let userId = req.query.id

  if (setUserId.has(userId)){
    fetch(process.env.RESP_URL, {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(requestBody)
    })
      
  } else {
    setUserId.add(userId)
  }

})

app.get('/msg', (req, res) => {
  let messageId = req.query.msgId
  console.log(messageId)
  res.json({code: 0})
})

app.listen(8000, () => {
  console.log('Server working')
})