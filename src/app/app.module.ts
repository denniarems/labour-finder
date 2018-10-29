import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, FormGroup } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './angularMaterial';

//imports HomeComponets
import { FooterComponent } from './UserComponets/footer/footer.component';
import { HomeComponent } from './UserComponets/home/home.component';
import { HireComponent } from './UserComponets/hire/hire.component';
import { ApplyComponent } from './UserComponets/apply/apply.component';
import { ContactComponent } from './UserComponets/contact/contact.component';
//imports AdminComponets
import { AddComponent } from './AdminComponets/add/add.component';
import { RemoveComponent } from './AdminComponets/remove/remove.component';
import { UpdateComponent } from './AdminComponets/update/update.component';
import { CheckComponent } from './AdminComponets/check/check.component';
import { AdminhomeComponent } from './AdminComponets/adminhome/adminhome.component';
import { Error404Component } from './Error/error404/error404.component';
import { MainNavComponent } from './UserComponets/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { OrderComponent } from './UserComponets/order/order.component';

@NgModule({
	declarations: [
		AppComponent,
		FooterComponent,
		HomeComponent,
		HireComponent,
		ApplyComponent,
		ContactComponent,
		AddComponent,
		RemoveComponent,
		UpdateComponent,
		CheckComponent,
		AdminhomeComponent,
		Error404Component,
		MainNavComponent,
		OrderComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialModule,
		HttpClientModule,
		FormsModule,
		LayoutModule
	],
	providers: [],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {}
