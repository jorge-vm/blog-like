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
      url: 'http://localhost:8080/articles',
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

      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        onChange={formik.handleChange}
        value={formik.values.title}
      />
      <label htmlFor="author">Author</label>
      <input
        id="author"
        name="author"
        onChange={formik.handleChange}
        value={formik.values.author}
      />
      <label htmlFor="body">Body</label>
      <textarea
        id="body"
        name="body"
        onChange={formik.handleChange}
        value={formik.values.body}
      />

      <button type="submit">Submit</button>

    </form>

  );
};

EditArticle.propTypes = {
  hideEdit: PropTypes.func.isRequired,
};

export default EditArticle;
