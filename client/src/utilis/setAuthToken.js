import axios from 'axios';

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token; //set every request token to token if is there
  } else {
    delete axios.defaults.headers.common['x-auth-token']; // else delete it from every route
  }
};

export default setAuthToken;
