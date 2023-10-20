import React from 'react';

import searchImages from '../API/api';
import ImageList from '../components/ImageList/ImageList';
import SearchBar from '../components/SearchBar/SearchBar';

const App = () => {
  const handleSubmit = async (term) => {
    const result = await searchImages(term);

    console.log(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList />
    </div>
  );
};

export default App;
