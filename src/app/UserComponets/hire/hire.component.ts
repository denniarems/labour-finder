import { Component, OnInit } from '@angular/core';
import { LabourService } from 'src/app/Services/labour.service';
import { ILabour } from 'src/app/LabourModel';
let n: string;
@Component({
	selector: 'app-hire',
	templateUrl: './hire.component.html',
	styleUrls: [
		'./hire.component.scss'
	]
})
export class HireComponent implements OnInit {
	constructor(private ps: LabourService) {}
	labour: ILabour[];

	ngOnInit(): void {
		this.ps.getlabours().subscribe((data) => {
			this.labour = JSON.parse(JSON.stringify(data));
		});
	}
	hire = (name: string) => {
		n = name;
	};
}
