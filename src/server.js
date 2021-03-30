import express from 'express';
import data from './services/test-data.json';

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/articles', (req, res) => {
  res.status(200).json(data);
});

app.use('*', (req, res) => {
  res.status(404).send({ message: 'Not found' });
});

app.listen(port);
