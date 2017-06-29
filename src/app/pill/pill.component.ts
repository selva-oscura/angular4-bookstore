import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pill',
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.css']
})
export class PillComponent implements OnInit {

	@Input() public text: String;

	// @Output() searchProductsByTag: EventEmitter<Boolean> = new EventEmitter<Boolean>();


  constructor() { }

  ngOnInit() {
  }

  onClick(tag): void{
  	console.log('clicked', tag);
  	// this.searchProductsByTag.emit(tag);
  }

}
