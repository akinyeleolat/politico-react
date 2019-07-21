import axios from 'axios';
const AuthToken = localStorage.getItem('jwt');
const instance = axios.create({
  baseURL: 'https://ngpolitico.herokuapp.com/api/v1/',
  headers: {
    Authorization: AuthToken,
    token: AuthToken
  }
});

export default instance;
