import axios from 'axios';

const API_URL = '/api/auth/';

const AuthService = () => {
  const login = async (username, password) => {
    const response = await axios
      .post(API_URL + '/login', {
        username,
        password
      });
    if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  }

  const logout = () => {
    localStorage.removeItem("user");
  }

  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  }
}


export default AuthService;