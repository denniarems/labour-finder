import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-adminhome',
	templateUrl: './adminhome.component.html',
	styleUrls: [
		'./adminhome.component.scss'
	]
})
export class AdminhomeComponent implements OnInit {
	constructor(private router: Router) {}
	ngOnInit() {}
	addclick = () => {
		this.router.navigateByUrl('/add');
	};
	showclick = () => {
		this.router.navigateByUrl('/check');
	};
	editclick = () => {
		this.router.navigateByUrl('/update');
	};
	removeclick = () => {
		this.router.navigateByUrl('/remove');
	};
}
