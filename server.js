var express = require('express');

var app = express();
var PORT = 3001;

app.use(express.static('public'));

app.get('/heartbeat', (req, res) => {
  res.json({
    is: 'working'
  })
})

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
})

app.listen(PORT, () => {
  console.log(`is running on PORT ${PORT}`)
})
