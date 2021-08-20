var express = require('express');
var cors = require('cors');
require('dotenv').config();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.get('/api/hello', (req, res) => {
  res.send('Hello from server.js');
});

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  console.log(res.json());
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port);
});
