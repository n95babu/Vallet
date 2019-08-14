import axios from 'axios';

const newsAPI = `https://min-api.cryptocompare.com/data/v2/news/?lang=EN`

const baseUrl = 'http://localhost:3000'

const api = axios.create({
  baseURL: baseUrl
});

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



export const fetchUser = async () => {
  const resp = await api.get('/users');
  console.log(resp.data)
  return resp.data;
};

export const fetchNews = async () => {
  const resp = await axios.get(newsAPI)
  const data = resp.data.Data
  console.log(data)
  return data;
}

// export const createUser = async (data) => {
//   const resp = await api.post('/users', data)
//   return resp.data;
// };

export const updateUser = async (userId, data) => {
  const resp = await api.put(`/users/${userId}`, data);
  return resp.data;
}

export const deleteUser = async (id) => {
  const resp = await api.delete(`/users/${id}`);
  return resp.data;
};

// fetch userCurrencies = async(user_id) 
  // api.get(/users/: user_id / currencies)
  // return resp.data

// fetch apiCurrencies = async
// this is where you do a get request to get currencies from that crypto api






