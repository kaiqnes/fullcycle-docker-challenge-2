const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

app.use(express.json());

function generateRandomName() {
  const adjectives = ['happy', 'sad', 'angry', 'funny', 'serious', 'silly', 'wise', 'confused', 'sleepy', 'awake'];
  const nouns = ['cat', 'dog', 'bird', 'fish', 'rabbit', 'turtle', 'lion', 'tiger', 'bear', 'monkey'];
  const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
  const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
  const nounIndex = Math.floor(Math.random() * nouns.length);
  const colorIndex = Math.floor(Math.random() * colors.length);
  const adjective = adjectives[adjectiveIndex];
  const noun = nouns[nounIndex];
  const color = colors[colorIndex]
  const name = `${adjective}-${color}-${noun}`;
  return name;
}

app.get('/', (req, res) => {
  const name = req.query.name || generateRandomName();
  connection.query('INSERT INTO people (name) VALUES (?)', [name], (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error inserting name');
    } else {
      connection.query('SELECT name FROM people', (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).send('Error retrieving names');
        } else {
          const names = results.map(result => `<li>${result.name}</li>`);
          const html = `<h1>Full Cycle Rocks!</h1>
              <ul>
                ${names.join()}
              </ul>`;
          res.end(html);
        }
      });
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
