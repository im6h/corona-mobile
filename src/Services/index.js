import axios from 'axios';
class ApiService {
  constructor() {}

  async getDataGlobal() {
    return axios.get('https://corona.lmao.ninja/v2/all');
  }

  async getDataCountry(country) {
    return axios.get(`https://corona.lmao.ninja/v2/countries/${country}`);
  }

  async getCountries() {
    return axios.get('https://corona.lmao.ninja/v2/countries/');
  }
}
const apiService = new ApiService();
export default apiService;
