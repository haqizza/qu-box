import axios from 'axios';
import authHeader from './auth-header';

const API_URL = '/api/auth/';

const UserService = () => {
  const getAdminBoard = () => {
    return axios.get(API_URL + 'admin', { headers: authHeader() })
  }
}

export default UserService;