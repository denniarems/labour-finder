import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class PassdataService {
	constructor() {}
	private data1;
	private data;

	setData(data) {
		this.data = data;
	}
	setData1(data1) {
		this.data1 = data1;
	}

	getData() {
		let temp = this.data;
		this.clearData();

		return temp;
	}
	getData1() {
		let temp1 = this.data1;
		this.clearData1();

		return temp1;
	}

	clearData() {
		this.data = undefined;
	}
	clearData1() {
		this.data1 = undefined;
	}
}
