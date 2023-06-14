import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';
import 'express-async-errors';

const app = express();

app.use(express.json()); // REST API → Body
app.use(express.urlencoded({ extended: false })); // HTML Form data → Body
app.use(express.static('public' /* , option */)); //
app.get('/file', (req, res, next) => {
  fs.readFile('/file1.txt', (err, data) => {
    if (err) res.sendStatus(404);
  });
});

app.get('/file1', (req, res, next) => {
  try {
    const data = fs.readFileSync('/file1.txt');
    res.send(data);
  } catch (error) {
    res.sendStatus(404);
  }
});

// app.get('/file2', (req, res) => {
//   fsAsync
//     .readFile('/file2.txt')
//     .then((data) => res.send(data))
//     .catch((err = res.sendStatus(404)));
// });

app.get('/file2', async (req, res) => {
  return fsAsync.readFile('/file2.txt').then((data) => res.send(data));
  // .catch((err = res.sendStatus(404)));
});

app.get('/file3', async (req, res) => {
  // try {
  const data = await fsAsync.readFile('/file2.txt');
  res.send(data);
  // } catch (error) {
  // res.sendStatus(404);
  // }
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Something went wrong' });
});

app.listen(8000);
