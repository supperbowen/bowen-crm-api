import UserService from '../services/user.service';
import _ from 'lodash';

export default class BasController{
  constructor(service){
    this.Service = service;
    this.userService = new UserService();
  }

  get service(){
    return this.Service;
  }

  toCollection(items=[], lookupItems={}, count=0){
    var userids = [];
    var creators = _.map(items, item=>item.createBy);
    var updators = _.map(items, item=>item.updateBy);

    userids = _.union(creators, updators);

    lookupItems.users = this.userService.getListByIds(userids);

    return {
      dataList:items,
      lookups:lookupItems,
      totalCount: count
    };
  }
  getLookup(items=[], key, service={}){
    return service.getListByIds(items.map(item=>item[key]));
  }
}