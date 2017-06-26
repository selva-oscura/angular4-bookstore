import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

	@Input() productFilters: Array<String>;
	@Output() updateProductFilters: EventEmitter<Object> = new EventEmitter<Object>();

	form: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  	this.form = this.formBuilder.group({
  		terms: ['', Validators.required],
  	});
  }

  submit(): void {
  	// console.log('clicked');
  	// console.log(this.form);
  	this.updateProductFilters.emit(this.form.value);
  }

}
