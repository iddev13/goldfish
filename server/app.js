require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandled = require('./middleware/ErrorHandlerMiddleware')
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, '..', 'client', 'build')))
app.use(fileUpload({}))
app.use('/api', router)

// Обработка ошибок всегда вызывается в самом конце, последний middleware
app.use(errorHandled)

const start = async () => {
	try {
		await sequelize.authenticate()
		await sequelize.sync()
		app.listen(PORT, () => console.log(`Server start on port ${PORT}...`))
	} catch (error) {
		console.log(error);
	}
}

start()