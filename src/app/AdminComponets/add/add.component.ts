import { Component, OnInit } from '@angular/core';
import { ILabour } from 'src/app/LabourModel';
import { LabourService } from 'src/app/Services/labour.service';
import { AdminService } from 'src/app/Services/admin.service';
let i = 0;
@Component({
	selector: 'app-add',
	templateUrl: './add.component.html',
	styleUrls: [
		'./add.component.scss'
	]
})
export class AddComponent implements OnInit {
	constructor(private ps: LabourService, private as: AdminService) {}
	labour: ILabour[];
	displayedColumns = [
		'fName',
		'age',
		'gender',
		'address1',
		'district',
		'job',
		'mobile',
		'addar',
		'actions'
	];

	ngOnInit() {
		this.fetchlabour();
	}

	fetchlabour(): void {
		this.ps.getlabours().subscribe((data) => {
			this.labour = JSON.parse(JSON.stringify(data));
		});
	}
	addL(id, x, y) {
		this.as.newlabour(x);
		this.deleteL(id);
		alert(`${y} Added Successfully`);
	}
	deleteL(id) {
		this.as.deleteR(id).subscribe(() => {
			this.fetchlabour();
		});
	}
}
