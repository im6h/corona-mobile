import apiService from '../../Services/index';
import {observable, action} from 'mobx';

class Country {
  @observable countries = [];
  @action async getCountries() {
    try {
      const response = await apiService.getCountries();
      if (response.status === 200 && response.data) {
        this.countries = response.data;
      }
    } catch (e) {
      console.log(e.message);
    }
  }
}
const countryStore = new Country();
export default countryStore;
