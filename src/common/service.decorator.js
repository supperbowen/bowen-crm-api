export default function Service(SvcCtor, name) {
	return function(target) {
		if (typeof target === 'function') {
			target.prototype.Service = SvcCtor;
			target.prototype.service = new SvcCtor(name);
		}
	}
}
