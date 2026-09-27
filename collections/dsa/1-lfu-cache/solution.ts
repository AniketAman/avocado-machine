interface Node<T> {
	value: T;
	next?: Node<T>;
	prev?: Node<T>;
}

export class LFU<T> {
	length: number;
	constructor(private capacity: number) {
	}

	get(key: string) {
	}

	put(key: string, value: T) {
	}
}
