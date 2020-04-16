import axios from 'axios';
class ApiService {
  constructor() {}

  async getDataGlobal() {
    return axios.get('https://corona.lmao.ninja/all');
  }

  async getAllData() {
    return axios.get('');
  }
  async getDataCountry() {
    return axios.get('https://corona.lmao.ninja/countries/VN');
  }
}
const apiService = new ApiService();
export default apiService;
