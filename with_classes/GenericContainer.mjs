class GenericContainer {
	#collection = [];
	#type = null;

	constructor(obj) {
		this.#type = typeof obj;
	}

	add(obj) {
		if (typeof obj === this.#type) {
			this.#collection.push(obj);
		}
	}

	remove(obj) {
		if (typeof obj === this.#type) {
			this.#collection = this.#collection.filter(item => item !== obj);
		}
	}

	getAll() {
		return this.#collection;
	}

	sortOn(property, ascending=true) {
		this.#collection.sort((a, b) => {
			if (a[property] < b[property]) {
				return ascending ? -1 : 1;
			}
			if (a[property] > b[property]) {
				return ascending ? 1 : -1;
			}
			return 0;
		});
	}

}

