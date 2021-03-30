import React from 'react';
import PropTypes from 'prop-types';

function Article({ title, author, body }) {
  return (
    <li>
      <span>
        title:
        {' '}
        {title}
      </span>
      <br />
      <span>
        author:
        {' '}
        {author}
      </span>
      <br />
      <span>
        body:
        {' '}
        {body}
      </span>
      <br />
    </li>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Article;
