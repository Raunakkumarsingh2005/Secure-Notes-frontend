<<<<<<< HEAD
import axios from 'axios';

console.log('API URL:', process.env.REACT_APP_API_URL);
=======
import axios from "axios";

console.log("API URL:", process.env.REACT_APP_API_URL);
>>>>>>> new-code

// Create an Axios instance
const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`,
  headers: {
<<<<<<< HEAD
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  withCredentials: true
});

// Add a request interceptor to include JWT and CSRF tokens
api.interceptors.request.use(async config => {
  const token = localStorage.getItem('JWT_TOKEN');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  let csrfToken = localStorage.getItem('CSRF_TOKEN');
  if (!csrfToken) {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/csrf-token`, { withCredentials: true });
      csrfToken = response.data.token;
      localStorage.setItem('CSRF_TOKEN', csrfToken);
    } catch (error) {
      console.error('Failed to fetch CSRF token', error);
    }
  }

  if (csrfToken) {
    config.headers['X-XSRF-TOKEN'] = csrfToken;
  }
console.log("X-XSRF-TOKEN " + csrfToken)
  return config;
}, error => {
  return Promise.reject(error);
});
=======
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});

// Add a request interceptor to include JWT and CSRF tokens
api.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("JWT_TOKEN");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    let csrfToken = localStorage.getItem("CSRF_TOKEN");
    if (!csrfToken) {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/csrf-token`,
          { withCredentials: true }
        );
        csrfToken = response.data.token;
        localStorage.setItem("CSRF_TOKEN", csrfToken);
      } catch (error) {
        console.error("Failed to fetch CSRF token", error);
      }
    }

    if (csrfToken) {
      config.headers["X-XSRF-TOKEN"] = csrfToken;
    }
    console.log("X-XSRF-TOKEN " + csrfToken);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
>>>>>>> new-code

export default api;
