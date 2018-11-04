import { Component, OnInit } from '@angular/core';
import { ILabour } from 'src/app/LabourModel';
import { LabourService } from 'src/app/Services/labour.service';
import { PassdataService } from 'src/app/Services/passdata.service';
import { AdminService } from 'src/app/Services/admin.service';

export interface jobs {
	name: string;
}

@Component({
	selector: 'app-update',
	templateUrl: './update.component.html',
	styleUrls: [
		'./update.component.scss'
	]
})
export class UpdateComponent implements OnInit {
	constructor(private as: AdminService, private pd: PassdataService) {}
	labour = this.pd.getData();
	id = this.pd.getData1();
	ngOnInit() {}
	gender: string[] = [
		'Male',
		'Female',
		'Other'
	];
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
		if (this.labour.fName != null && this.labour.addar != null && this.labour.district != null) {
			this.as.editlabour(
				this.id,
				this.labour.fName,
				this.labour.lName,
				this.labour.age,
				this.labour.gender,
				this.labour.address1,
				this.labour.address2,
				this.labour.district,
				this.labour.job,
				this.labour.mobile,
				this.labour.addar
			);
		}
	}
}
