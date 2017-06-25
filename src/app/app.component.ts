import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public title: String = 'Bookstore';

  public testText: String = 'test text';

  public products: Array<Object> = [  
  	{
  		title: "product 1",
  		author: "A.N. Author",
  		price: 23.99,
  		description: "blah",
  	},{
  		title: "product 2",
  		author: "An Other Author",
  		price: 12.99,
  		description: "blah, blah",
  	}
  ];
}
