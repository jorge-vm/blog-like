import React, { useState } from 'react';
import useAxios from 'axios-hooks';
import ArticleList from './ArticleList';
import EditArticle from './EditArticle';

function App() {
  const [{ data, loading, error }, refetch] = useAxios(
    'http://localhost:8080/api/articles',
  );

  const [isEditShown, setIsEditShown] = useState(false);
  const hideEdit = () => {
    setIsEditShown(false);
    refetch();
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong.</p>;

  return (
    <div>
      <ArticleList articles={data.articles} />
      <button onClick={() => setIsEditShown(true)} type="button">Add an article</button>
      {isEditShown && (<EditArticle hideEdit={hideEdit} />)}
    </div>
  );
}

export default App;
