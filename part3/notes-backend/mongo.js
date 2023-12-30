const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('give password as an argument')
    process.exit(1)
}

const password = process.argv[2]

const url = 
    `mongodb+srv://fullstack:${password}@cluster0.8zwlrrs.mongodb.net/noteApp?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
    content: String,
    date: Date,
    important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note1 = new Note({
    content: 'HTML is easy',
    date: new Date(),
    important: true,
})

const note2 = new Note({
    content: 'CSS is hard',
    date: new Date(),
    important: true,
})

const note3 = new Note({
    content: 'Mongoose makes things easy',
    date: new Date(),
    important: true,
})

/*
note1.save().then(result => {
    console.log('note saved!')
    mongoose.connection.close()
})

note2.save().then(result => {
    console.log('note saved!')
    mongoose.connection.close()
})

note3.save().then(result => {
    console.log('note saved!')
    mongoose.connection.close()
})
*/

Note.find({ }).then(result => {
    result.forEach(note => {
        console.log(note)
    })
    mongoose.connection.close()
})
