const express = require('express');

const app = express();

app.get('/', (_, res) => {
  res.send({ message: '/api' });
});

app.get('/users', (_, res) => {
  res.send([
    { id: 1, name: 'Ali' },
    { id: 2, name: 'Veli' },
    { id: 3, name: 'Ahmet' },
    { id: 4, name: 'Mehmet' },
  ]);
});

app.listen(3000, () => console.log('Listening on port 3000'));
