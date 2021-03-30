const express = require('express');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Article = require('./services/articleModel');
const articlesService = require('./services/articles')(Article);

const app = express();
const port = process.env.PORT || 8080;

(async () => {
  try {
    mongoose.Promise = Promise;

    app.use(express.static('public'));
    app.set('view engine', 'ejs');
    app.use(bodyParser.json());

    const mongoUriString = process.env.MONGO_URI || 'mongodb://localhost/blog-like';

    await mongoose.connect(
      mongoUriString,
      { useNewUrlParser: true },
    );
    console.info('connected to mongo');

    app.use('/api', articlesService);

    app.get('/', (req, res) => {
      res.render('index');
    });

    app.use('*', (req, res) => {
      res.status(404).send({ message: 'Not found' });
    });

    app.listen(port);
  } catch (error) {
    console.error(error);
  }
})();
