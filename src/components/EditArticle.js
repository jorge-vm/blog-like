/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useFormik } from 'formik';
import useAxios from 'axios-hooks';
import PropTypes from 'prop-types';

const EditArticle = ({ hideEdit }) => {
  const [
    { data: postData, loading: postLoading, error: postError },
    executePost,
  ] = useAxios(
    {
      url: 'http://localhost:8080/api/articles/',
      method: 'POST',
    },
    { manual: true },
  );

  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      body: '',
    },
    onSubmit: (values) => {
      //   alert(JSON.stringify(values, null, 2));
      executePost({
        article: {
          values,
        },
      });
    },
  });

  if (postLoading) return <p>Loading...</p>;
  if (postError) return <p>Error!</p>;
  if (postData) { hideEdit(); }

  return (
    <form onSubmit={formik.handleSubmit}>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Title of the Article"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="author" className="form-label">Author</label>
        <input
          type="text"
          className="form-control"
          id="author"
          placeholder="John Doe"
          onChange={formik.handleChange}
          value={formik.values.author}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">Enter article here</label>
        <textarea
          className="form-control"
          id="body"
          rows="3"
          onChange={formik.handleChange}
          value={formik.values.body}
        />
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>

    </form>

  );
};

EditArticle.propTypes = {
  hideEdit: PropTypes.func.isRequired,
};

export default EditArticle;
