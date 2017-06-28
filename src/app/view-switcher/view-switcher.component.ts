import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'view-switcher',
  templateUrl: './view-switcher.component.html',
  styleUrls: ['./view-switcher.component.css']
})
export class ViewSwitcherComponent implements OnInit {

	@Input() isAdmin: Boolean;


  constructor() { }

  ngOnInit() {
  }

}
