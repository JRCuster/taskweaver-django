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
  const { serviceName, imageName, port, envVar } = req.body;
  
  // Placeholder content for docker-compose-services.yml
  const dockerComposeContent = `
version: '3'
services:
  ${serviceName}:
    image: ${imageName}
    ports:
      - "${port}"
    environment:
      - ${envVar}
`;

  // Placeholder content for Dockerfile.1
  const dockerfileContent = `
FROM ${imageName}
ENV ${envVar.split('=')[0]}=${envVar.split('=')[1]}
`;

  // Logic to save the docker-compose-services.yml and Dockerfile.1 will go here.
  // For now, we'll just send the content back to the user.
  res.send(`<h1>Generated Files</h1>
            <h2>docker-compose-services.yml:</h2>
            <pre>${dockerComposeContent}</pre>
            <h2>Dockerfile.1:</h2>
            <pre>${dockerfileContent}</pre>`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});