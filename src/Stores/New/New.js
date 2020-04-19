import apiService from '../../Services/index';
import {observable, action} from 'mobx';
class New {
  @observable listNews = [];
  @action async getListNews(offset) {
    try {
      const response = await apiService.getNews(offset);
      if (response.status === 200 && response.data) {
        this.listNews = response.data.items;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
const newStore = new New();
export default newStore;
