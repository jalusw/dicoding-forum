import axios from 'axios';

const apiBaseUrl = 'https://forum-api.dicoding.dev/v1';
const timeoutDuration = 10000;

const client = axios.create({
  baseURL: apiBaseUrl,
  timeout: timeoutDuration,
});

export default client;
