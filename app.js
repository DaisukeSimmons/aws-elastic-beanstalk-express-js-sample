const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Daisuke knows AWS CodeBuild and CodePipeline. He's always learning.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
