import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ILabour } from 'src/app/LabourModel';
import { LabourService } from 'src/app/Services/labour.service';

export interface jobs {
	name: string;
}

@Component({
	selector: 'app-apply',
	templateUrl: './apply.component.html',
	styleUrls: [
		'./apply.component.scss'
	]
})
export class ApplyComponent implements OnInit {
	constructor(private ls: LabourService) {}
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

	labour = new ILabour(null, null, null, null, null, null, null, null, null, null);
	click() {
		if (this.labour.fName != null && this.labour.addar != null && this.labour.district != null) {
			this.ls.newlabour(this.labour);
			alert(
				`Thank You ${this.labour.fName} ,Registerd Successfully. We will contact You Soon... Have a nice day`
			);
		}
	}
}
