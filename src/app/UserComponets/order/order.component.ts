import { Component } from '@angular/core';
import { PassdataService } from 'src/app/Services/passdata.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-order',
	templateUrl: './order.component.html',
	styleUrls: [
		'./order.component.scss'
	]
})
export class OrderComponent {
	constructor(private pd: PassdataService, private router: Router) {}
	labour = this.pd.getData();
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

	click() {
		if (this.labour != null) {
			alert(`Thank You ,${this.labour} will contact You Soon... Have a nice day`);
		}
	}
}
