const express = require('express')
const path = require('path');
const algo = require('./src/algo')
let app = express();

const dir = path.join(__dirname + '/public')

app.use(express.static(dir))
app.get('/', () => {
  algo.runner();
})
app.listen(3000);

console.log('server running on port 3000')

