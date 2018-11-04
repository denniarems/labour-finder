import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { log } from 'util';
@Injectable({
	providedIn: 'root'
})
export class AdminService {
	constructor(private http: HttpClient) {}
	editlabour(id, fName, lName, age, gender, address1, address2, district, job, mobile, addar) {
		const labour = {
			_id: id,
			fName: fName,
			lName: lName,
			age: age,
			gender: gender,
			address1: address1,
			address2: address2,
			district: district,
			job: job,
			mobile: mobile,
			addar: addar
		};
		console.log('inside');
		console.log('labour data', labour);
		return this.http.post('http://localhost:3000/admin/update', { labour }).subscribe(
			(data) => {
				console.log(data);
			},
			(err) => {
				console.log(err);
			}
		);
	}

	deleteR(id) {
		return this.http.get(`http://localhost:3000/admin/deleteRdata/${id}`);
	}
	deleteL(id) {
		return this.http.get(`http://localhost:3000/admin/deleteLdata/${id}`);
	}
	newlabour(item) {
		return this.http.post('http://localhost:3000/admin/add', { labour: item }).subscribe((data) => {});
	}
}
