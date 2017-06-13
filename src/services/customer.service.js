import schema from '../models/customer.schema';
import BasService from '../common/bas.service';

export default class Service extends BasService{
  constructor(){
    super('customer', schema);
  }
}