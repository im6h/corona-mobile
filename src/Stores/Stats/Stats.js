import apiService from '../../Services/index';
import {observable, action} from 'mobx';
class Stats {
  @observable stats = {};
  @action async getStats() {
    try {
      const response = await apiService.getAllData();
      if (response.status === 200 && response.data) {
        this.stats = response.data;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
const statsStore = new Stats();
export default statsStore;
