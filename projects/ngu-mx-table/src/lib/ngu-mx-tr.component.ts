import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'ngu-mx-tr',
	template: `
	<div class="mx-table row" role="rowgroup">
				 <ng-content></ng-content>
  </div>
	`,
	styleUrls: ['./ngu-mx-table.component.css']
})
export class NguMatrixTableRowComponent implements OnInit {

	constructor() {
	}

	@Input() data: any;

	ngOnInit(): void {
	}

}
