const express = require('express')
const grapqhqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

// allow cross-origin requests
app.use(cors())

mongoose.connect('mongodb://dangha:Dang2402@ds127843.mlab.com:27843/the-net-ninja-demo')
mongoose.connection.once('open', () => {
	console.log('connected to database')
})

app.use('/graphql', grapqhqlHTTP({
	schema,
	graphiql: true
}))

app.listen(5000, () => console.log('App is listening on port 5000...'))