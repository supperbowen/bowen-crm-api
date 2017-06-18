import schema from '../models/contact.schema';
import BasService from '../common/bas.service';

export default class Service extends BasService {
	constructor() {
		super('contact', schema);
	}
}