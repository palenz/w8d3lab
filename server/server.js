const express = require('express');
const app = express();
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const cors = require('cors')

app.use(parser.json());
app.use(cors());

// MongoClient.connect('mongodb://localhost:27017')
// .then((client) => {
//     const db = client.db('booking_manager');
//     const bookingsCollection = db.collection('bookings')
//     const bookingsRouter = createRouter(bookingsCollection)
//     app.use('/api/bookings', bookingsRouter);
// })
// .catch(console.error);

MongoClient.connect('mongodb://localhost:27017', (err, client) => {   // ASYNC CONNECTION - RETURNS A PROMISE - WHICH WE USE TO CONNECT TO THE DB.
  if(err){
    console.log(err);
  }

  const db = client.db('booking_manager');                        // GET DATABASE
  const bookingsCollection = db.collection('bookings');           // DATABASE GAME COLLECTION IS ASSIGNED TO gamesCollection
  const bookingsRouter = createRouter(bookingsCollection)         // CREATES A ROUTER, WHICH WILL WORK AGAINST THE DB GAMES COLLECTION TO PROCESS game REQUESTS
  app.use('/api/bookings', bookingsRouter);                       // TELLS THE SERVER TO USE THE GAME ROUTER - ALLOWS SERVER TO USE THE GAMES ROUTER AND DEFINE A BASIC PATH

// MOVE ONTO CREATE_ROUTER TO DEFINE ROUTES

  app.listen(3000, function(){
    console.log(`app listening on port ${this.address().port}`);
  })
})
