const express = require('express');

const app = express();

app.get('/', async (_, res) => {
  const usersRes = await fetch('http://api:3000/users');
  const users = await usersRes.json();
  const html = `
    <h1>Users</h2>
    <ul>
      ${users.map((user) => `<li>#${user.id}: ${user.name}</li>`).join('')}
    </ul>
  `;

  res.type('html').send(html);
});

app.listen(3001, () => console.log('Listening on port 3001'));
