import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './UserComponets/home/home.component';
import { HireComponent } from './UserComponets/hire/hire.component';
import { ApplyComponent } from './UserComponets/apply/apply.component';
import { ContactComponent } from './UserComponets/contact/contact.component';
import { OrderComponent } from './UserComponets/order/order.component';
import { AdminhomeComponent } from './AdminComponets/adminhome/adminhome.component';
import { AddComponent } from './AdminComponets/add/add.component';
import { RemoveComponent } from './AdminComponets/remove/remove.component';
import { UpdateComponent } from './AdminComponets/update/update.component';
import { CheckComponent } from './AdminComponets/check/check.component';
import { Error404Component } from './Error/error404/error404.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'hire',
		component: HireComponent
	},
	{
		path: 'apply',
		component: ApplyComponent
	},
	{
		path: 'contact',
		component: ContactComponent
	},
	{
		path: 'admin',
		component: AdminhomeComponent
	},
	{
		path: 'add',
		component: AddComponent
	},
	{
		path: 'remove',
		component: RemoveComponent
	},
	{
		path: 'update',
		component: UpdateComponent
	},
	{
		path: 'check',
		component: CheckComponent
	},
	{
		path: 'order',
		component: OrderComponent
	},
	{
		path: '**',
		component: Error404Component
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {}
