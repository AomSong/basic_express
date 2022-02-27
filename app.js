const express = require('express')
const app = express()
const port = 3000
const logger = require('./middleware/logger')


// const path = require('path')
// app.use('/static', express.static(path.join(__dirname, 'public')))

app.use(logger);

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', require('./router/api/book'));





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})