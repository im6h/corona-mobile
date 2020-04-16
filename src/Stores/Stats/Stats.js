import apiService from '../../Services/index';
import {observable, action} from 'mobx';
class Stats {
  @observable stats = {};
  @observable dataStats = {};
  @observable dataCountry = {};
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
      const response = await apiService.getDataCountry();
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
