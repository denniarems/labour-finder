import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { HireComponent } from '../hire/hire.component';

@Component({
	selector: 'app-order',
	templateUrl: './order.component.html',
	styleUrls: [
		'./order.component.scss'
	]
})
export class OrderComponent implements AfterViewInit {
	constructor() {}
	@ViewChild(HireComponent) Hire;
	name: string;
	ngAfterViewInit() {
		console.log(this.Hire.n);

		this.name = this.Hire.n;
	}
	dist: string[] = [
		'Alappuzha',
		'Ernakulam',
		'Idukki',
		'Kannur',
		'Kasargod',
		'Kollam',
		'Kottayam',
		'Kozhikode',
		'Malappuram',
		'Palakkad',
		'Pathanamthitta',
		'Thiruvananthapuram',
		'Thrissur',
		'Wayanad'
	];
}
