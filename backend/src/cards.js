const express = require ('express');

const app = express();

app.get('/tasks', () => (request, response) => response.status(200).send('Olá mundo'));
app.post('/task');
app.delete('/tasks');

app.listen(3333, () => console.log('serving runing on port 3333'));