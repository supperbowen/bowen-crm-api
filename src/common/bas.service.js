var {Schema} = require('mongoose');
var _ = require('lodash');
export default class Service{
  constructor(name, schema){
    this.schema = schema;
    this.DbModel = new Schema(name, schema);
  }
  hasKey(key){
    return this.schema.hasOwnProperty(key);
  }
  toSchema(item){
    return new this.DbModel(item);
  }  
  getList(filter, pageSize, pageNumber,sortter){
    pageNumber = pageNumber ||0;
    var skipItems = pageNumber * pageSize;
    var query = this.DbModel.find(filter);
    if(pageSize){
      query.skip(skipItems).limit(pageSize);
    }
    sortter= sortter || {updated:-1};

    return query.sort(sortter).exec();
  }
  getLikeList(keys, filter,pageSize,pageNumber,sortter){
    keys = keys&&keys.length?keys:['name','desc'];
    var filterOptions = {$or:[]};
    for(let key of keys){
      if(this.hasKey(key)){
        let keyFilter = {};
        keyFilter[key] = {$in:filter};
        filterOptions.$or.push(keyFilter);
      }
    }

    return this.getList(filterOptions, pageSize, pageNumber,sortter);
  }
  getListByIds(ids){
    ids = _.uniq(ids).filter(x=>!!x);//使用lodash去重,去无效值
    var filter = {_id:{$in:ids}};
    return this.getList(filter);
  }
  getItem(filter){
    return this.DbModel.findOne(filter).exec();
  }  
  getItemById(id){
    return this.DbModel.findById(id).exec();
  }
  deleteItem(id){
    return this.DbModel.findByIdAndRemove(id).exec();
  }
  saveItem(item){
    var id = item._id;
    if(id){
      delete item._id;
    }
    return this.DbModel.findByIdAndUpdate(id, item, {upsert:true}).exec();
  }
  create(){
    return {};
  }
}