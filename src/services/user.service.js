import basService from '../common/bas.service';
import schema from '../models/user.schema';

export default class Service extends basService {
	constructor() {
		super('user', schema);
	}

	create() {
		return {
			name: '',
			nickName: '',
			desc: '',
			img: null,
			roles: []
		};
	}
}