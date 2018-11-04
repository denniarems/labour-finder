import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class LabourService {
	constructor(private http: HttpClient) {}
	getlabours() {
		return this.http.get('http://localhost:3000/user/hire');
	}
	getlaboursfromadmin() {
		return this.http.get('http://localhost:3000/admin/hire');
	}
	newlabour(item) {
		return this.http.post('http://localhost:3000/user/apply', { labour: item }).subscribe((data) => {
			console.log(data);
		});
	}
}
