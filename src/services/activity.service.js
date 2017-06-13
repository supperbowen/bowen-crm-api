import basService from '../common/bas.service';
import schema from '../models/activity.schema';

export default class Service extends basService{
  constructor(){
    super('activity', schema);
  }
  getCustomerActivies(customer_id){
    return this.getList({customer_id});
  }
  getEmployeeActivies(employee_id){
    return this.getList({employee_id});	
  }
}

