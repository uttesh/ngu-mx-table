import { Component, OnInit, ViewChild, ContentChild } from '@angular/core';
import { NguMatrixTableRowComponent } from './ngu-mx-tr.component';
import { NguMatrixTableHeaderComponent } from './ngu-mx-th.component';

@Component({
	selector: 'ngu-mx-table',
	template: `
	<div class="table-container" role="table" aria-label="Destinations">
	  <ng-content></ng-content>
  </div>
	`,
	styleUrls: ['./ngu-mx-table.component.css']
})
export class NguMatrixTableComponent implements OnInit {

	ngOnInit(): void {
	}
	constructor() {
	}

}
