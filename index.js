const ConnectDB = require ('./mong.js')
const express = require ('express');
const app = express()
const mongoose = require('mongoose')

const Person = require('./models/Person.js')

app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

const personRoutes = require('./routes/personRoutes.js')

app.use('/person', personRoutes)

app.get('/', (__, response) =>{


    response.json({message: 'Porrrr funciona'})

})


ConnectDB().then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Listening port: ${process.env.PORT || 3000}`);
    })
})
