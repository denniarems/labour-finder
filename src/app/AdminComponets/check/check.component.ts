import { Component, OnInit } from '@angular/core';
import { ILabour } from 'src/app/LabourModel';
import { LabourService } from 'src/app/Services/labour.service';
import { AdminService } from 'src/app/Services/admin.service';
import { Router } from '@angular/router';
import { PassdataService } from 'src/app/Services/passdata.service';
@Component({
	selector: 'app-check',
	templateUrl: './check.component.html',
	styleUrls: [
		'./check.component.scss'
	]
})
export class CheckComponent implements OnInit {
	constructor(
		private ls: LabourService,
		private as: AdminService,
		private router: Router,
		private ps: PassdataService
	) {}
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
		this.ls.getlaboursfromadmin().subscribe((data) => {
			this.labour = JSON.parse(JSON.stringify(data));
		});
	}
	editL(id, x) {
		this.ps.setData(x);
		this.ps.setData1(id);
		this.router.navigateByUrl('/update');
	}
	deleteL(id) {
		this.as.deleteL(id).subscribe(() => {
			this.fetchlabour();
		});
	}
}
