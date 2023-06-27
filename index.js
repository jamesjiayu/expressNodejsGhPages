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
  res.send({ name: 'James Test' });
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

//////////////////////////////////////
/**
 * Node.js added support for ES6 import and export syntax in version 13.2.0. However, this feature is behind the `--experimental-modules` flag in Node.js versions 10 and 12. In Node.js version 14 and onwards, it is no longer experimental and you can use it without a flag. 

One important thing to note is that Node.js treats JavaScript files as CommonJS modules by default. To tell Node.js to treat your files as ES6 modules, you can do one of the following:

1. Add `"type": "module"` to your `package.json` file. This will treat all `.js` files in your project as ES6 modules.

```json
{
  "name": "your-project-name",
  "version": "1.0.0",
  "type": "module"
}
```
[Source 5](https://nodejs.org/api/esm.html#esm_package_json_type_field)

2. Use the `.mjs` extension for your files. Node.js will treat any file with a `.mjs` extension as an ES6 module.

```js
// lib.mjs
export function square(x) {
    return x * x;
}

// main.mjs
import { square } from './lib.mjs';
console.log(square(11)); // 121
```
[Source 5](https://nodejs.org/api/esm.html#esm_enabling)

3. Use the `.cjs` extension for files you want to be treated as CommonJS. This is useful if you have `"type": "module"` in your `package.json`, but still have some files that you want to be treated as CommonJS.

```js
// lib.cjs
module.exports = function square(x) {
    return x * x;
}

// main.mjs
import square from './lib.cjs';
console.log(square(11)); // 121
```
[Source 5](https://nodejs.org/api/esm.html#esm_enabling)

Please note that the ES6 `import` statement only supports importing default exports in Node.js. To import named exports, you have to use a workaround:

```js
// lib.mjs
export function square(x) {
    return x * x;
}

// main.mjs
import * as lib from './lib.mjs';
console.log(lib.square(11)); // 121
```
[Source 5](https://nodejs.org/api/esm.html#esm_import_statements)

With these changes, you should be able to use ES6 import and export in your Node.js project.
 */
