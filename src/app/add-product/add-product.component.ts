import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

	@Output() addProduct: EventEmitter<Object> = new EventEmitter<Object>();
	form: FormGroup;

	constructor(private formBuilder: FormBuilder) { }

	ngOnInit() {
		this.form = this.formBuilder.group({
			title: [''],
			author: [''],
			description: [''],
			price: [''],
			tags: [''],
		})
	}
	submit(): void {
		console.log('clicked');
		this.addProduct.emit(this.form.value);
	}
}
