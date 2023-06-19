import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '6003cd1239ac4708a46cbcdd255cd891',
  },
});
