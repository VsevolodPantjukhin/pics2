import axios from 'axios';

const searchImages = async () => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID lY8YoiucpXl1Fd2A_nQnuo6ly316Hx5U0s8oVAQLfo4',
    },
    params: {
      query: 'cars',
    },
  });
  console.log(response);
  return response;
};

export default searchImages;
