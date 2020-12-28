const express = require('express');
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient

const app = express();
mongodb_connection_string="mongodb+srv://sample_db:sample_db@cluster0.xwdm6.mongodb.net/<myLocation>?retryWrites=true&w=majority"
app.use(bodyParser.urlencoded({ extended: true }))
MongoClient.connect(mongodb_connection_string, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('myUserLoc')
    const locCollection = db.collection('locData')
    //app.use(/* ... */)
    app.get('/', (req, res) => {
        db.collection('locData').find().toArray()
          .then(results => {
            console.log(results)
          })
          .catch(error => console.error(error))
        // ...
      })
    app.post('/locPost', (req, res) => {
        quotesCollection.insertOne(req.body)
          .then(result => {
            console.log(result)
          })
          .catch(error => console.error(error))
      })
    //app.listen(/* ... */)

  })


// MongoClient.connect(mongodb_connection_string,
//     {
//         useUnifiedTopology: true
//       }, (err, client) => {
//     if (err) return console.error(err)
//   console.log('Connected to Database')
//   })

// app.get('/', function(req, res) {
//     res.send('Hello World')
//   })

app.listen(3000, function() {
    console.log('listening on 3000')
  })