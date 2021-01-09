import axios from 'axios';
import store from 'store';

const token = store.get("access_token");
const client = store.get("client");
const uid = store.get("uid");

const instance = axios.create({
  baseURL: "http://herokutuan.herokuapp.com",
  headers: {
    Authorization:
      "Bearer ya29.a0AfH6SMB1GQjg7zTBVVVstrxy4iSlq7AZxs3wTBm-DUGYnnGNgbbtuX5NmlYWRBMN3zO9hlICXbGLCx5vTc4jMFmCCCWvIOEP_pSbE4K22Oco2zwYw1VhMfOTYr0yPYq-rcAmNK993OrdfC0EhZ0Mss5b06zbL0cOLH8",
    uid: `${uid}`,
    "access-token": `${token}`,
    client: `${client}`,
    "Content-Type": "application/json",
  },
});

export default instance;
// Bearer ya29.a0AfH6SMB1GQjg7zTBVVVstrxy4iSlq7AZxs3wTBm-DUGYnnGNgbbtuX5NmlYWRBMN3zO9hlICXbGLCx5vTc4jMFmCCCWvIOEP_pSbE4K22Oco2zwYw1VhMfOTYr0yPYq-rcAmNK993OrdfC0EhZ0Mss5b06zbL0cOLH8
// Bearer ya29.a0AfH6SMC3w1tXe7lCUECmZhkZZ1tRIaeYTrcF1B9_Bk7PFJcfbuxds7nEqowZQNqBs4_JBrnA9a2dDuY_r58jnUl0zgtBUZz95iTKwlVhvVzWgpaJzsiqD7045KO-NdLCa1TT7ZhZcP6npf_Ofb_Y-fkN9ZVgGjG