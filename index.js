const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors=require('cors')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydb',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error: ' + err.stack);
    return;
  }
  console.log('Connected to the database');
});

app.post('/submit-form', (req, res) => {
  const formData = req.body;
  const sql = 'INSERT INTO test SET ?';
  db.query(sql, formData, (err, result) => {
    if (err) {
      console.error('Database insert error: ' + err.message);
      return res.status(500).send('Error inserting data into the database.');
    }
    res.status(200).send('Data inserted successfully.');
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});