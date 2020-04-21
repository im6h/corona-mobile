import apiService from '../../Services/index';
import AsyncStorage from '@react-native-community/async-storage';
import {observable, action, toJS} from 'mobx';
import moment from 'moment';
class Stats {
  @observable countrySelect = {};
  @observable dataStats = {};
  @observable dataCountry = {};
  @observable statsCountryByCodeAndDate = [];
  @action async setMyCountry(country) {
    try {
      this.countrySelect = country;
      this.getDataCountry();
      this.getStatsCountryByCodeAndDate();
      let data = toJS(JSON.stringify(country));
      await AsyncStorage.setItem('country', data);
    } catch (e) {
      console.log(e);
    }
  }

  @action async readMycountry() {
    try {
      let data = await AsyncStorage.getItem('country');
      if (data !== null) {
        this.countrySelect = JSON.parse(data);
        this.getStatsCountryByCodeAndDate();
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
      this.countrySelect = {
        _id: 704,
        iso2: 'VN',
        iso3: 'VNM',
        lat: 21,
        long: 105.8,
        flag:
          'https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/vn.png',
      };
      this.getStatsCountryByCodeAndDate();
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

  @action async getStatsCountryByCodeAndDate() {
    let startDate = moment(moment().subtract(7, 'days').calendar()).format(
      'YYYY-MM-DD',
    );
    let endDate = moment().format('YYYY-MM-DD');
    try {
      const response = await apiService.getStatsCountryByCodeAndDate(
        this.countrySelect.iso2,
        startDate,
        endDate,
      );
      if (response.status === 200 && response.data) {
        this.statsCountryByCodeAndDate = response.data;
      }
    } catch (e) {
      // console.log(e);
    }
  }
}
const statsStore = new Stats();
export default statsStore;
