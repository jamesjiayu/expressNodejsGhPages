const express = require('express');
//const express=require('express')
const mysql = require('mysql2');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
//const app=express();
//const port =3000
//const path=require('path')
const port = 3000;
const path = require('path');

app.use(express.static('static'));

app.get('/', (req, res) => {
  // res.sendFile(path.resolve('pages/index.html'));
  //res.send(`<html><div>haha</div></html>`);
  res.send({ name: 'James' });
});
app.get('/hello', (req, res) => {
  //how to go to :3010/hello?
  res.send('hello');
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const uri =
  'mongodb+srv://j:w@clusterj.sobzoi2.mongodb.net/?retryWrites=true&w=majority';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'test',
// });

// // simple query
// connection.query(
//   'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
//   function (err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//   }
// );

// // with placeholder
// connection.query(
//   'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
//   ['Page', 45],
//   function (err, results) {
//     console.log(results);
//   }
// );

// connection.end();
