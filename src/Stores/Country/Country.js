import apiService from '../../Services/index';
import {observable, action} from 'mobx';
import {createContext} from 'react';
class Country {
  @observable countries = [];
  @action async getCountries() {
    try {
      const response = await apiService.getCountries();
      if (response.status === 200 && response.data) {
        this.countries = response.data;
      }
    } catch (e) {
      console.log(e);
    }
  }
}
const countryStore = createContext(new Country());
export default countryStore;
