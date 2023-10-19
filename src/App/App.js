import React from 'react';

import ImageList from '../components/ImageList/ImageList';
import SearchBar from '../components/SearchBar/SearchBar';

const App = () => {
  const handleSubmit = (term) => {
    console.log('Do a search with ', term);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList />
    </div>
  );
};

export default App;
