import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'product-search',
	templateUrl: './product-search.component.html',
	styleUrls: ['./product-search.component.css']
})

export class ProductSearchComponent implements OnInit {

	@Input() productFilters: Array<String>;
	@Output() searchProducts: EventEmitter<Object> = new EventEmitter<Object>();

	form: FormGroup

	constructor(private formBuilder: FormBuilder) { }

	ngOnInit(): void {
		this.form = this.formBuilder.group({
			terms: ['', Validators.required],
		});
	}

	submit(): void {
		this.searchProducts.emit(this.form.value);
	}

	clear(): void{
		this.form.value.terms="";
		this.searchProducts.emit(this.form.value)
		this.form.reset();
	}

}
