const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> {
        console.log(" CONNECTION OPEN!!! ")
    })
    .catch(err => {
        console.log(" OH NO ERROR!!! ")
        console.log(err)
    })

personSchema = new mongoose.Schema({
    first:String,
    last: String
})

//  MONGOOSE VIRTUALS
personSchema.virtual('fullName').get( function () {
    return `${this.first} ${this.last}`
})

// MIDDLEWARE
personSchema.pre('save', async function (){
    console.log('About to be saved')
})
personSchema.post('save', async function (){
    console.log('Saved')
})


const Person = mongoose.model('Person', personSchema);