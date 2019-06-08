const express = require('express')
const connectDB = require('./config/db')

const app = express()

// Connect database
connectDB()

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => res.json({ message: 'Welcome to the Contact Keeper API' }))

app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))

app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`))
