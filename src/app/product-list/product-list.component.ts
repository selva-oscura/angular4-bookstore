import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

	@Input() testText: String;
	@Input() products: Array<Object>;

  constructor() { }

  ngOnInit() {
  }

}
