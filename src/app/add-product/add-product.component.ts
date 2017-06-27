import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

	@Output() addProduct: EventEmitter<Object> = new EventEmitter<Object>();

  constructor() { }

  ngOnInit() {
  }
	submit(): void {
		console.log('clicked');
		let form = {
			title: 'next title',
			author: 'A.N. Author',
			description: 'a new book from A.N. Author',
			price: 239.99,
			promoted: true,
			tags: ['book', 'some topic', 'extraordinary'],
		}
		this.addProduct.emit(form);
	}
}
