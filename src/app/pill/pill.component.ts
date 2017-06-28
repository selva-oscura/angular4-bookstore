import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pill',
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.css']
})
export class PillComponent implements OnInit {

	@Input() public text;

  constructor() { }

  ngOnInit() {
  }

}
