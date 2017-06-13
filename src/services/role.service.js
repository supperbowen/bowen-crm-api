import schema from '../models/role.schema';
import BasService from '../common/bas.service';

export default class Service extends BasService{
  constructor(){
    super('role', schema);
  }
  create(){
    return {
      name:'',
      authrity:[],
      desc:'',
    };
  }
}