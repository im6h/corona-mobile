import axios from 'axios';
class ApiService {
  constructor() {}

  async getDataGlobal() {
    return axios.get('https://corona.lmao.ninja/all');
  }

  async getDataCountry() {
    return axios.get('https://corona.lmao.ninja/countries/VN');
  }

  async getCountry() {
    return axios.get('https://corona.lmao.ninja/countries/');
  }
}
const apiService = new ApiService();
export default apiService;
