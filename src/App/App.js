import React from 'react';
import { useState } from 'react';

import searchImages from '../API/api';
import ImageList from '../components/ImageList/ImageList';
import SearchBar from '../components/SearchBar/SearchBar';

const App = () => {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);

    setImages(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
