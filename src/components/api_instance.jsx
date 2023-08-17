import axios from "axios"; 
const instance = axios.create({
  baseURL : 'https://kaleem-backend.000webhostapp.com/api',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Access-Control-Allow-Headers': 'Content-Type',
  },
  // .. other options
});

export default instance;