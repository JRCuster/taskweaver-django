const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/generate', (req, res) => {
  // Logic to generate docker-compose-services.yml and Dockerfile.1
  // based on user input will go here.
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});