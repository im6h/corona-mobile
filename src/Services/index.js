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

  async getNews(offset) {
    return axios.get(`https://api.coronatracker.com/news/trending`, {
      limit: 9,
      offset,
      language: 'en',
    });
  }

  async getStatsCountryByCodeAndDate(countryCode, startDate, endDate) {
    return axios.get(
      `https://api.coronatracker.com/v3/analytics/trend/country`,
      {
        countryCode,
        startDate,
        endDate,
      },
    );
  }
}
const apiService = new ApiService();
export default apiService;
