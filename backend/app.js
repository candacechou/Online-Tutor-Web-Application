if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const path = require('path')
const express = require('express')
const flash = require('connect-flash')
const session = require('express-session')

const app = express()
const port = process.env.PORT || 3000



app.listen(port, () => {
  console.info(`Example app listening on port ${port}!`)
})

module.exports = app