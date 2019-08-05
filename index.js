const express = require('express')
const path = require('path');
let app = express();

const dir = path.join(__dirname + '/public')

app.use(express.static(dir))
app.listen(3000);

console.log('server running on port 3000')

