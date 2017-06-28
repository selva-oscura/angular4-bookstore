import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
			title: ['', Validators.required],
			author: ['', Validators.required],
			description: ['', Validators.required],
			price: ['', Validators.required],
			tags: ['', Validators.required],
		})
	}
	submit(): void {
		this.addProduct.emit(this.form.value);
		this.form.reset();
	}
}
