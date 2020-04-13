import axios from 'axios';
class ApiService {
  constructor() {}
  async getAllData() {
    return axios.get('');
  }
  async getDataCountry() {
    return axios.get('');
  }
}
const apiService = new ApiService();
export default apiService;
