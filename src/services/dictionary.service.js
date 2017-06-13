import schema from '../models/dictionary.schema';
import BasService from '../common/bas.service';

export default class Service extends BasService{
  constructor(){
    super('dictionary', schema);
  }
}