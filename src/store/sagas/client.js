import axios from 'axios';
const baseURL = 'https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/main/data';

const client = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default client;
