const express = require('express');
//const express=require('express')
const app = express();
//const app=express();
//const port =3000
//const path=require('path')
const port = 3010;
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
