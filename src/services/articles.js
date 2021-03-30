const express = require('express');

function routes(Article) {
  const articleRouter = express.Router();
  articleRouter.route('/articles')
    .post((req, res) => {
      const article = new Article(req.body);

      article.save();
      return res.status(201).json(article);
    })
    .get((req, res) => {
      Article.find((err, articles) => {
        if (err) {
          return res.send(err);
        }
        return res.json(articles);
      });
    });
  articleRouter.route('/articles/:articleId')
    .get((req, res) => {
      Article.findById(req.params.articleId, (err, article) => {
        if (err) {
          return res.send(err);
        }
        return res.json(article);
      });
    });

  return articleRouter;
}

module.exports = routes;
