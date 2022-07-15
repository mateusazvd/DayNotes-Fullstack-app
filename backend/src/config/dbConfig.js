const mongoose = require('mongoose')

const dbConfig = 'mongodb+srv://mateusazevedo:2001spfc@cluster0.9mxsrhj.mongodb.net/annotations?retryWrites=true&w=majority'

const connection = mongoose.connect(dbConfig,{
    useNewUrlParser:true,
    useUnifiedTopology: true
})

module.exports = connection

