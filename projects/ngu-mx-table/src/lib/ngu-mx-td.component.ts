import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'ngu-mx-td',
	template: `
	<div class="mx-row" role="cell">
		<ng-content></ng-content>
	</div>
	`,
	styleUrls: ['./ngu-mx-table.component.css']
})
export class NguMatrixTableDataComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

}
