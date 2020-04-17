import apiService from '../../Services/index';
import AsyncStorage from '@react-native-community/async-storage';
import {observable, action, toJS} from 'mobx';
class Stats {
  @observable countrySelect = {};
  @observable dataStats = {};
  @observable dataCountry = {};

  @action async setMyCountry(country) {
    try {
      this.countrySelect = country;
      this.getDataCountry();
      let data = toJS(JSON.stringify(country));
      await AsyncStorage.setItem('country', data);
    } catch (e) {
      console.log(e);
    }
  }

  @action async readMycountry() {
    try {
      let data = await AsyncStorage.getItem('name');
      if (data !== null) {
        this.countrySelect = JSON.parse(data);
      } else {
        this.countrySelect = {
          _id: 704,
          iso2: 'VN',
          iso3: 'VNM',
          lat: 21,
          long: 105.8,
          flag:
            'https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/vn.png',
        };
      }
    } catch (e) {
      // error reading value
    }
  }

  @action async getDataGlobal() {
    try {
      const response = await apiService.getDataGlobal();
      if (response.status === 200 && response.data) {
        this.dataStats = response.data;
      }
    } catch (e) {
      console.log(e);
    }
  }

  @action async getDataCountry() {
    try {
      const response = await apiService.getDataCountry(this.countrySelect.iso2);
      if (response.status === 200 && response.data) {
        this.dataStats = response.data;
      }
    } catch (e) {
      console.log(e);
    }
  }

  @action async getStats() {
    try {
      const response = await apiService.getAllData();
      if (response.status === 200 && response.data) {
        this.dataStats = response.data;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
const statsStore = new Stats();
export default statsStore;
