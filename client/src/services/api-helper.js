import axios from 'axios';

const newsAPI = `https://min-api.cryptocompare.com/data/v2/news/?lang=EN`
const coinApi = `https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=BTC,USD`
const baseUrl = 'http://localhost:3000'
const MKTApi = `https://api.coinranking.com/v1/public/stats?base=USD`
const api = axios.create({
  baseURL: baseUrl
});

// ======================= Auth ========================
export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData)
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users/', { user: registerData })
  return resp.data
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/users/verify');
    return resp.data
  }
  return false;
}

export const fetchCurrentUser = async (id) => {
  const resp = await api.get(`users/${id}`)
  return resp.data
}


//==================================  User ==================

// Update User
export const updateUser = async (userId, data) => {
  const resp = await api.put(`/users/${userId}`, data);
  return resp.data;
}


//=============================== Currencies ==================

// Create Currencies
export const createCoin = async (UserId, data) => {
  const resp = await api.post(`/users/${UserId}/currencies`, data)
  return resp.data;
}

// User Currencies
export const userCurrencies = async (UserId, data) => {
  const resp = await api.get(`/users/${UserId}/currencies`)
  return resp.data;
}

// Update Currencies
export const updateCoin = async (UserId, coinId) => {
  const resp = await api.put(`/users/${UserId}/currencies/${coinId}`)
  return resp.data;
}

// Delete Currencies
export const deleteCoin = async (UserId, coinId) => {
  const resp = await api.delete(`/users/${UserId}/currencies/${coinId}`)
  return resp.data
}

// ================ 3rd Party ======================== 

// News
export const fetchNews = async () => {
  const resp = await axios.get(newsAPI)
  const data = resp.data.Data
  return data;
}

//  Currencies
export const apiCurrencies = async () => {
  const resp = await axios.get(coinApi)
  const data = resp.data
  return data;
}


// MKT Cap
export const ApiCap = async () => {
  const resp = await axios.get(MKTApi)
  console.log(resp)
  return resp;
}