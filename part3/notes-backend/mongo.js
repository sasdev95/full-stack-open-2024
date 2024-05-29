const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://fullstack_drs:${password}@cluster0.acde1ud.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
    content: String,
    date: Date,
    important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

Note.find({}).then(result => {
    result.forEach(note => {
        console.log(note)
    })
    mongoose.connection.close()
})

/*
const note1 = new Note({
    content: 'HTML is easy',
    date: new Date(),
    important: true,
})

note1.save().then(result => {
    console.log('note saved!')
    mongoose.connection.close()
})

const note2 = new Note({
    content: 'Mongoose makes use of mongo easy',
    date: new Date(),
    important: true,
})

note2.save().then(result => {
    console.log('note saved!')
    mongoose.connection.close()
})

const note3 = new Note({
    content: 'Callback functions suck',
    date: new Date(),
    important: true,
})

note3.save().then(result => {
    console.log('note saved!')
    mongoose.connection.close()
})
*/
