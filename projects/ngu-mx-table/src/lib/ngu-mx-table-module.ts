import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguMatrixTableHeaderComponent } from './ngu-mx-th.component';
import { NguMatrixTableComponent } from './ngu-mx-table.component';
import { NguMatrixTableRowComponent } from './ngu-mx-tr.component';
import { NguMatrixTableDataComponent } from './ngu-mx-td.component';
@NgModule({
	declarations: [
		NguMatrixTableHeaderComponent,
		NguMatrixTableComponent,
		NguMatrixTableRowComponent,
		NguMatrixTableDataComponent
	],
	exports: [
		NguMatrixTableHeaderComponent,
		NguMatrixTableComponent,
		NguMatrixTableRowComponent,
		NguMatrixTableDataComponent
	],
	imports: [
		CommonModule
	],
	providers: [],
	bootstrap: []
})
export class NguMatrixTableModule { }