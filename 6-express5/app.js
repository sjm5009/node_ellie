import express from 'express';
const app = express();

app.all('/all/*', (req, res, next) => {
  console.log('all');
  next();
});

app.use('/use', (req, res, next) => {
  console.log('use');
  next();
});

app.get(
  '/',
  (req, res, next) => {
    console.log(req.query);
    console.log('First1');
    next();
    // next('route');
    // next(new Error('Err!!'));
  },
  (req, res, next) => {
    console.log('First2');
    res.send('Home2');
  }
);

// next('route')가 있을경우 동작
app.get('/', (req, res, next) => {
  console.log('Second');
});

app.get('/id/:id', (req, res, next) => {
  console.log(req.params);

  // res.send('Id');
  // res.json({ name: 'summer' });
  // res.sendStatus(404);
  res.status(201).send('created');
});

app.use(express.json());
app.post('/', (req, res, next) => {
  console.log(req.body);
  res.json({ result: 'success' });
});

// Error Handler
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send('Sorry, try later');
});
app.listen(8000);
