import { Component, OnInit } from '@angular/core';
import { LabourService } from 'src/app/Services/labour.service';
import { ILabour } from 'src/app/LabourModel';
import { PassdataService } from 'src/app/Services/passdata.service';
import { Router } from '@angular/router';
let n: string;
@Component({
	selector: 'app-hire',
	templateUrl: './hire.component.html',
	styleUrls: [
		'./hire.component.scss'
	]
})
export class HireComponent implements OnInit {
	constructor(private ps: LabourService, private pd: PassdataService) {}
	labour: ILabour[];

	ngOnInit(): void {
		this.ps.getlaboursfromadmin().subscribe((data) => {
			this.labour = JSON.parse(JSON.stringify(data));
		});
	}
	hire = (name) => {
		this.pd.setData(name);
	};
}
