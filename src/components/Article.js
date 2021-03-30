import React from 'react';
import PropTypes from 'prop-types';

function Article({ title, author, body }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{title}</div>
        {author && (`By ${author}`)}
        <br />
        {body}
      </div>
    </li>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Article;
