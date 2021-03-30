import React from 'react';
import PropTypes, { shape } from 'prop-types';
import Article from './Article';

function ArticleList({ articles }) {
  return (
    <ul>
      {articles.map((article) => (<Article key={article.id} {...article} />))}
    </ul>
  );
}

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })).isRequired,
};

export default ArticleList;
