import { NgModule } from '@angular/core';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule, MatListModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
@NgModule({
	imports: [
		MatButtonModule,
		MatCheckboxModule,
		MatCardModule,
		MatSidenavModule,
		MatTableModule,
		MatMenuModule,
		MatChipsModule,
		MatDialogModule,
		MatToolbarModule,
		MatToolbarModule,
		MatButtonModule,
		MatRadioModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule,
		MatInputModule,
		MatFormFieldModule,
		MatSelectModule
	],
	exports: [
		MatDialogModule,
		MatCardModule,
		MatButtonModule,
		MatCheckboxModule,
		MatTableModule,
		MatSidenavModule,
		MatMenuModule,
		MatChipsModule,
		MatSelectModule,
		MatToolbarModule,
		MatToolbarModule,
		MatRadioModule,
		MatButtonModule,
		MatSidenavModule,
		MatInputModule,
		MatIconModule,
		MatListModule,
		MatFormFieldModule
	]
})
export class MaterialModule {}
