import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'view-switcher',
  templateUrl: './view-switcher.component.html',
  styleUrls: ['./view-switcher.component.css']
})
export class ViewSwitcherComponent implements OnInit {

	@Input() isAdmin: Boolean;

	@Output() switchUser: EventEmitter<Boolean> = new EventEmitter<Boolean>();


  constructor() { }

	onClick(): void {
		this.switchUser.emit();
	}

  ngOnInit() {
  }

}
