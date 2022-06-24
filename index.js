//  CREATING A DB WITH MONGOOSE


// To create a database with mongoose, u ave to first turn on the mongo server, then require mongoose 
const mongoose = require('mongoose');
// Then you connect mongoose to the mongo server
mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> {
        console.log(" CONNECTION OPEN!!! ")
    })
    .catch(err => {
        console.log(" OH NO ERROR!!! ")
        console.log(err)
    })


// Then you create a schema
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

//Then you make a model using the schema
const Movie = mongoose.model('Movie', movieSchema)  //  'Movie' is the name of the schema,it is supposed to be singular and uppercase

//Then you create a db entry
// const amadeus = new Movie({title:'Amadeus', year: 1986, score: 9.2, rating:'R'})

//Then you save it in the node repl using amadeus.save()
//  amadeus.save()


//  To insert many data into the database at once

// Movie.insertMany([
//     {title: 'Amelie', year:2001, score:8.3, rating: 'R' }, 
//     {title: 'Alien', year:1979, score:8.1, rating: 'R' }, 
//     {title: 'The Iron Giant', year:1999, score:7.5, rating: 'PG' }, 
//     {title: 'Stand By Me', year:1986, score:8.6, rating: 'R' }, 
//     {title: 'Moonrise Kingdom', year:2012, score:7.3, rating: 'PG-13' }

// ])
//     .then(data => {
//         console.log("IT WORKED")
//         console.log(data)
//     }).catch(err =>{
//         console.log(err)
//     })



//  FINDING WITH MONGOOSE

// Movie.find({}).then(data => console.log(data))  // this is to find all movies in the db... This returns an array


// Movie.find({rating: 'PG-13'}).then(data => console.log(data))  // this is to find movies with the rating PG-13...This returns an array

// Movie.findById('ID').then(data => console.log(data))  // this find the movie with the matching id


//   UPDATING IN MONGOOSE

// Movie.updateOne({title: 'Amadeus'}, {year: 1984}).then(res => console.log(res)) // this finds the 
//                                         movie with the title amadeus and updates the year to 1984

//Movie.updateMany({title: {$in: ['Amadeus', 'Stand By Me']}}, {score: 10}). then(res => console.log(res)) // this updates both movies score

//Movie.findOneAndUpdate({title: 'The Iron Giant'}, {score: 7.0}, {new: true}).then(m => console.log(m)) // this returns the updated movie, the precessors do not


//  DELETING IN MONGOOSE

//Movie.remove({title: 'Amelie'}).then(msg => console.log(msg))

//Movie.deleteMany({year: {$gte : 1999}}).then(msg => console.log(msg))

//Movie.findOneAndDelete({title: 'Alien'}).then(m => console.log(m)) // this returns the deleted image






