import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'product-search',
	templateUrl: './product-search.component.html',
	styleUrls: ['./product-search.component.css']
})

export class ProductSearchComponent implements OnInit {

	@Input() productFilters: Array<String>;
	@Output() searchProducts: EventEmitter<Object> = new EventEmitter<Object>();

	public searchTerms: FormControl = new FormControl('');

	constructor() { }

	ngOnInit(): void {
		this.searchTerms.valueChanges.subscribe((value: string) => {
			this.searchProducts.emit(value)
		})
	}

}
