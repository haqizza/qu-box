// import axios from 'axios';
// import authHeader from './auth-header';

// const API_URL = '/api/auth/';

class UserService{
  setUser(boxId){
    localStorage.setItem('boxId', boxId["boxId"]);
  }

  getBoxInfo(){
    return JSON.parse(localStorage.getItem('boxInfo'));
  }
}

export default new UserService();