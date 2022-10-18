require('dotenv').config()
// Require modules
const express = require('express')
const methodOverride = require('method-override')
const db = require('./models/db')
const app = express()

// Configure the app (app.set)
/*Start Config */
app.use(express.urlencoded({ extended: true })) // This code makes us have req.body
app.use((req, res, next) => {
  res.locals.data = {}
  next()
})
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx') // register the jsx view engine
db.once('open', () => {
  console.log('connected to MongoDB Atlas')
})
/*Start Middleware */
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use('/pokes', require('./controllers/routeController'))
/* END Middleware */

// Tell the app to listen on port 3005
app.listen(3005, function() {
 console.log('Listening on port 3005');
});