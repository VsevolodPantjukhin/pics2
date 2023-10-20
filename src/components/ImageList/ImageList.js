import React from 'react';

import ImageShow from '../ImageShow/ImageShow';

const ImageList = ({ images }) => {
  return (
    <div>
      ImageList: {images.length}
      <ImageShow />
    </div>
  );
};

export default ImageList;
