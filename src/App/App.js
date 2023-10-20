import React from 'react';

import searchImages from '../API/api';
import ImageList from '../components/ImageList/ImageList';
import SearchBar from '../components/SearchBar/SearchBar';

const App = () => {
  const handleSubmit = (term) => {
    searchImages(term);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList />
    </div>
  );
};

export default App;
