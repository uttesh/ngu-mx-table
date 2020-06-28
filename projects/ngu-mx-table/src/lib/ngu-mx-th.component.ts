import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'ngu-mx-th',
	template: `
	  <div class="mx-table header" role="rowgroup">
    <div class="mx-row first" role="columnheader"></div>
		<div class="mx-row" role="columnheader" *ngFor="let header of headers"><span
		style="font-weight: bold;">{{header}}</span></div>
	</div>
	`,
	styleUrls: ['./ngu-mx-table.component.css']
})
export class NguMatrixTableHeaderComponent implements OnInit {

	@Input() headers: [];

	constructor() { }

	ngOnInit(): void {
	}

}
