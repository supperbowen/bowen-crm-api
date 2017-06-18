import schema from '../models/employee.schema';
import BasService from '../common/bas.service';

export default class Service extends BasService {
	constructor() {
		super('employee', schema);
	}
}