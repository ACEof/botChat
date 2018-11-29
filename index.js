let express = require('express')
let requestBody = require('./requestBody')
require('dotenv').config()

let app = express()

let arrayUserId = []

app.get('/', (req, res) => {
  let userId = req.query.id

  for (i=0; i<=arrayUserId.length; i++) {
    if (userId == arrayUserId[i]){
      fetch(process.env.RESP_URL, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(requestBody)
      })
      break
    } else {
      arrayUserId.push(userId)
      res.json({text: 'Вам необходимо нажать на кнопку номер 4-2'})
      break
    }
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