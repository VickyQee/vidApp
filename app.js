const express = require ('express');

const morgan = require ('morgan')


import router from './routes/genre'
// const genreRoute = require ('./routes/genre.js')

// const usersRoute = require ('./routes/customers')

import { genreRoute, usersRoute } from './routes/index'

require ('dotenv').config()

const app = express ()

app.use (morgan('dev')) 

app.use (json())

app.use (urlencoded({extended : false}))

app.get ('/', (req, res, next) => {
    res.status(200).send("Welcome to Video App")
    next ()
})

app.use('/genre', genreRoute)

app.use('/users', usersRoute)

const PORT = process.env.PORT || 3000

app.listen (PORT, () => {
    console.log(`Server listen on on http://localhost:${PORT}`);
})

